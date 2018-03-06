import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { FormProvider } from '../../shared/providers/form-provider';
import { ShoppinglistProvider } from '../../shared/providers/shoppinglist-provider';

@Component({
	selector: 'page-shopping-list',
	templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private fProvider: FormProvider,
		private slProvider: ShoppinglistProvider
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ShoppingListPage');
	}

	onAddIngredient(ingredientForm: NgForm) {
		// this.fProvider.submitForm(ingredientForm);
		const slVal = ingredientForm.value;
		this.slProvider.addSingleIngredient(slVal.ingredientName, slVal.ingredientAmt);
	}

}
