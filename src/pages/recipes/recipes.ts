import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, LoadingController, Loading } from 'ionic-angular';

import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import { RecipeClass } from '../../shared/models/recipe';
import { StoreLoadPage } from '../storeload/storeloadpage';

import { RecipesProvider } from '../../shared/providers/recipes-provider';
import { DbOperationsService } from '../../services/dbopts-service';
import { AuthUserService } from '../../services/auth-user';
import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';

@Component({
	selector: 'page-recipes',
	templateUrl: 'recipes.html',
})
export class RecipesPage {

	private recipes: RecipeClass[] = [];
	private hasRecipes: Boolean = false;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private popoverCtrl: PopoverController,
		private loadCtrl: LoadingController,
		private recipeProvider: RecipesProvider,
		private dbService: DbOperationsService,
		private authService: AuthUserService,
		private errHandler: ErrorhandlerProvider
	) { }

	ionViewWillEnter() {
		this.recipes = this.recipeProvider.getRecipes();
		this.hasRecipes = this.recipes.length > 0;
	}

	addNewRecipe() {
		this.navCtrl.push(EditRecipePage, {
			mode: 'New'
		});
	}

	onLoadRecipe(idx: number, recipe: RecipeClass) {
		const theRecipe = {
			targetRecipe: recipe,
			index: idx
		}
		this.navCtrl.push(RecipeDetailsPage, theRecipe);
	}

	onRecipeOptions(event: MouseEvent) {
		const popover = this.popoverCtrl.create(StoreLoadPage);
		popover.present({ ev: event });
		popover.onDidDismiss((actionObj) => {
			// ensure action pass in. If we donot check it, then on page, error will occur.
			// due to popover could not get any action.
			if (actionObj !== null && actionObj.hasOwnProperty('action')) {
				const spinner = this.loadCtrl.create({
					content: `${actionObj.action} recipe list`
				});
				spinner.present();
				switch (actionObj.action) {
					case 'Store':
						this.authService.fbGetActiveUserToken()
							.then((token: string) => {
								this.dbService.stroeRecList(token)
									.subscribe((res) => {
										console.log('71 -- res: ', res);
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
								this.dbService.fetchRecList(token)
									.subscribe((responseRecipes: RecipeClass[] | any) => {
										if (responseRecipes !== null && responseRecipes.length > 0) {
											// this is ionic reload page.
											this.navCtrl.setRoot(this.navCtrl.getActive().component);
											this.recipes = responseRecipes;
										} else {
											this.recipes = [];
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

}
