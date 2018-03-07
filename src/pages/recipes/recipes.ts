import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditRecipePage } from '../edit-recipe/edit-recipe';

@Component({
	selector: 'page-recipes',
	templateUrl: 'recipes.html',
})
export class RecipesPage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecipesPage');
	}

	addNewRecipe() {
		this.navCtrl.push(EditRecipePage, {
			mode: 'New'
		});
	}

}
