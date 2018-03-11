import { HttpClient } from '@angular/common/http';
import { AuthUserService } from '../services/auth-user';
import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/models/ingredient';
import { RecipeClass } from '../shared/models/recipe';
import { ShoppinglistProvider } from '../shared/providers/shoppinglist-provider';
import { RecipesProvider } from '../shared/providers/recipes-provider';

import 'rxjs/add/operator/do';

@Injectable()
export class DbOperationsService {

	private baseUrl: String = `https://ionic3-auth-recipebook.firebaseio.com/`;
	private uId: String = '';
	private slFile: String = 'shopping-list.json?auth=';
	private recFile: String = 'recipe-list.json?auth=';

	constructor(
		private httpCli: HttpClient,
		private authService: AuthUserService,
		private slProvider: ShoppinglistProvider,
		private rProvider: RecipesProvider
	) {
		this.uId = this.authService.fbGetActiveUser().uid;
		console.log('27 -- uid: ', this.uId);
	}

	storeSlList(token: string) {
		const slUrlWithToken = `${this.baseUrl}${this.slFile}${token}`;
		const ingredients: Ingredient[] = this.slProvider.getIngredients();
		return this.httpCli.put(slUrlWithToken, ingredients);
	}

	fetchSlList(token: string) {
		const slUrlWithToken = `${this.baseUrl}${this.slFile}${token}`;
		return this.httpCli.get(slUrlWithToken)
			.do((replyShoppingList: Ingredient[] | any) => {
				if (replyShoppingList !== null) {
					this.slProvider.addMultiIngredient(replyShoppingList);
					return replyShoppingList;
				} else {
					this.slProvider.clearShoppingList();
					return [];
				}
			})
	}

	stroeRecList(token: string) {
		const slUrlWithToken = `${this.baseUrl}${this.recFile}${token}`;
		const ingredients: RecipeClass[] = this.rProvider.getRecipes();
		return this.httpCli.put(slUrlWithToken, ingredients);
	}

	fetchRecList(token: string) {
		const slUrlWithToken = `${this.baseUrl}${this.recFile}${token}`;
		return this.httpCli.get(slUrlWithToken)
			.do((Recipes: RecipeClass[] | null) => {
				console.log('60 -- Recipes: ', Recipes);
				if (Recipes === null) {
					// if return null, then clear up everything.
					this.slProvider.clearShoppingList();
					this.rProvider.clearRecipeList();
					return [];
				} else {
					// if not null, then u have to pick up ingredient one by one resave as array
					// and also insert to slProvider Ingredient arr.
					// then return.
					for (let idx = 0; idx < Recipes.length; idx++) {
						if (!Recipes[idx].hasOwnProperty('ingredients')) {
							Recipes[idx].ingredients = [];
						}
					}
					this.rProvider.addMultiRecipes(Recipes);
					return Recipes;
				}
			})

	}

}
