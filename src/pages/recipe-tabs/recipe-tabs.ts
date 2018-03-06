import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { ShoppingListPage } from '../shopping-list/shopping-list';
import { RecipesPage } from '../recipes/recipes';

@Component({
	selector: 'page-recipe-tabs',
	templateUrl: 'recipe-tabs.html',
})
export class RecipeTabsPage {

	@ViewChild('recipesTabs') recipeTabsRef: Tabs
	private slPage: any = ShoppingListPage;
	private recipesPage: any = RecipesPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecipeTabsPage');
		this.recipeTabsRef.select(0);
	}

}
