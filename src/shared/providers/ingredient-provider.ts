import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientProvider {

	public isRemoveIngredient: Boolean = false;

	constructor(
		private http: HttpClient
	) {
		console.log('Hello IngredientProvider Provider');
	}

	doRemoveIngredients(isRemove: boolean) {
		this.isRemoveIngredient = isRemove;
	}

}
