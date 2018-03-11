import { Component, OnInit, ErrorHandler } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, PopoverController, LoadingController } from 'ionic-angular';
import { ShoppinglistProvider } from '../../shared/providers/shoppinglist-provider';
import { Ingredient } from '../../shared/models/ingredient';

import { StoreLoadPage } from '../storeload/storeloadpage';
import { DbOperationsService } from '../../services/dbopts-service';
import { AuthUserService } from '../../services/auth-user';
import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';

@Component({
	selector: 'page-shopping-list',
	templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

	private IngredientList: Ingredient[] = [];

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private slProvider: ShoppinglistProvider,
		private dbOptsService: DbOperationsService,
		private popOverCtrl: PopoverController,
		private loadCtrl: LoadingController,
		private authService: AuthUserService,
		private errHandler: ErrorhandlerProvider
	) { }

	ionViewWillEnter() {
		this.LoadIngreList();
	}

	LoadIngreList() {
		this.IngredientList = this.slProvider.getIngredients();
	}

	onShowOpts(event: MouseEvent) {
		const popover = this.popOverCtrl.create(StoreLoadPage);
		popover.present({ ev: event });
		popover.onDidDismiss((actionObj) => {
			console.log('43 -- actionObj: ', actionObj);
			if (actionObj !== null && actionObj.hasOwnProperty('action')) {
				// ensure action pass in. If we donot check it, then on page, error will occur.
				// due to popover could not get any action.
				const spinner = this.loadCtrl.create({
					content: `${actionObj.action} - shopping list`
				});
				spinner.present();
				switch (actionObj.action) {
					case 'Store':
						this.authService.fbGetActiveUserToken()
							.then((token: string) => {
								this.dbOptsService.storeSlList(token)
									.subscribe((res) => {
										console.log('56 -- success store list: ', res);
									});
								spinner.dismiss();
							})
							.catch((err) => {
								this.errHandler.handleException(err, actionObj.action, spinner);
							});
						break;
					case 'Load':
						this.authService.fbGetActiveUserToken()
							.then((token: string) => {
								this.dbOptsService.fetchSlList(token)
									.subscribe((responseIngredients: Ingredient[]) => {
										if (responseIngredients !== null && responseIngredients.length > 0) {
											this.IngredientList = responseIngredients;
										} else {
											this.IngredientList = [];
										}
									});
								spinner.dismiss();
							})
							.catch((err) => {
								this.errHandler.handleException(err, actionObj.action, spinner);
							});
						break;
					default:
						break;
				}
			} else {
				return;
			}
		});
	}

	onAddIngredient(ingredientForm: NgForm) {
		// this.fProvider.submitForm(ingredientForm);
		const slVal = ingredientForm.value;
		this.slProvider.addSingleIngredient(slVal.ingredientName, slVal.ingredientAmt);
		ingredientForm.reset();
		this.LoadIngreList();
	}

	onCheckIngredient(idx: number) {
		this.slProvider.removeIngredient(idx);
		this.LoadIngreList();
	}

}
