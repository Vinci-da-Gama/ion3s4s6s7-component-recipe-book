import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { FormProvider } from '../../shared/providers/form-provider';
import { ShoppinglistProvider } from '../../shared/providers/shoppinglist-provider';
import { Ingredient } from '../../shared/models/ingredient';

@Component({
	selector: 'page-shopping-list',
	templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

	private IngredientList: Ingredient[] = [];

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private fProvider: FormProvider,
		private slProvider: ShoppinglistProvider
	) { }

	ionViewWillEnter() {
		this.LoadIngreList();
	}

	LoadIngreList() {
		this.IngredientList = this.slProvider.getIngredients();
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
