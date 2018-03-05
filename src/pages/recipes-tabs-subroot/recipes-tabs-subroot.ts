import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipeTabsPage } from '../recipe-tabs/recipe-tabs';

@Component({
	selector: 'page-recipes-tabs-subroot',
	templateUrl: 'recipes-tabs-subroot.html',
})
export class RecipesTabsSubrootPage {

	private recipesTabPage: any = RecipeTabsPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecipesTabsSubrootPage');
	}

}
