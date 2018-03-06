import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { FormProvider } from '../../shared/providers/form-provider';

@Component({
	selector: 'page-shopping-list',
	templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private fProvider: FormProvider
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ShoppingListPage');
	}

	onAddIngredient(form: NgForm) {
		console.log('23 -- ', form);
	}

}
