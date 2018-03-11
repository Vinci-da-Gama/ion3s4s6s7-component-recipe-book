import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastController } from 'ionic-angular';

import { Ingredient } from '../models/ingredient';
import { RecipeClass } from '../models/recipe';
import { ToastProvider } from './toast-provider';

@Injectable()
export class RecipesProvider {

	private recipeList: RecipeClass[] = [];

	constructor(
		private http: HttpClient,
		private toastProvider: ToastProvider
	) { }

	addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]) {
		this.recipeList.push(new RecipeClass(title, description, difficulty, ingredients));
		this.toastProvider.toastWithMsg('Recipe is added.');
	}

	addMultiRecipes(recipes: RecipeClass[]) {
		this.recipeList = recipes;
	}

	getSigRecipe(idx: number): RecipeClass {
		return this.recipeList[idx];
	}

	getRecipes(): RecipeClass[] {
		return this.recipeList;
	}

	updateRecipe(idx: number, t: string, descr: string, diffi: string, ingres: Ingredient[]) {
		const targetRecipe: RecipeClass = this.recipeList[idx];
		if (targetRecipe) {
			this.recipeList[idx] = new RecipeClass(t, descr, diffi, ingres);
			this.toastProvider.toastWithMsg('Recipe is updated.');
		} else {
			this.toastProvider.toastWithMsg('Cannot find this recipe...');
		}
	}

	removeRecipe(idx: number) {
		if (this.recipeList.length > 0) {
			this.recipeList.splice(idx, 1);
		} else {
			this.toastProvider.toastWithMsg('No Any Recipe...');
		}
	}

	clearRecipeList() {
		this.recipeList = [];
	}

}
