import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import { RecipeClass } from '../../shared/models/recipe';

import { RecipesProvider } from '../../shared/providers/recipes-provider';

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
		private recipeProvider: RecipesProvider
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

}
