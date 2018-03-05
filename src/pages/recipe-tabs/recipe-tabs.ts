import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';

@Component({
	selector: 'page-recipe-tabs',
	templateUrl: 'recipe-tabs.html',
})
export class RecipeTabsPage {

	private slPage: any = ShoppingListPage;
	private recipesPage: any = RecipesPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecipeTabsPage');
	}

}
