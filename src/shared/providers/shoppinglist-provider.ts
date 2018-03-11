import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Ingredient } from '../models/ingredient';

@Injectable()
export class ShoppinglistProvider {

	private IngreArr: Ingredient[] = [];

	constructor(
		private http: HttpClient
	) {
		console.log('Hello ShoppinglistProvider Provider');
	}

	addSingleIngredient(name: string, amount: number) {
		this.IngreArr.push(new Ingredient(name, amount));
	}

	addMultiIngredient(ingredients: Ingredient[]) {
		this.IngreArr.push(...ingredients);
	}

	updateIngredient(index: number, ingredient: Ingredient) {
		console.log('update Ingredient');
	}

	getIngredients() {
		return this.IngreArr.slice();
	}

	removeIngredient(index: number) {
		console.log('34 -- before delete: ', this.IngreArr);
		this.IngreArr.splice(index, 1);
		console.log('36 -- after delete: ', this.IngreArr);
	}

	clearShoppingList() {
		this.IngreArr = [];
	}

}
