import { Ingredient } from './ingredient';

export class RecipeClass {

	constructor(
		public title: string,
		public description: string,
		public difficulty: string,
		public ingredients: Ingredient[]
	) { }
}
