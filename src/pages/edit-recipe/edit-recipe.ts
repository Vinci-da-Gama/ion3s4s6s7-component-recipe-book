import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {
	NavController,
	NavParams,
	ActionSheetController,
	AlertController
} from 'ionic-angular';
import { FormatWidth } from '@angular/common';
import { ToastProvider } from '../../shared/providers/toast-provider';
import { RecipesProvider } from '../../shared/providers/recipes-provider';
import { IngredientProvider } from '../../shared/providers/ingredient-provider';
import { Ingredient } from 'shared/models/ingredient';
import { RecipeClass } from 'shared/models/recipe';

@Component({
	selector: 'page-edit-recipe',
	templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {

	private editMode: String = '';
	private selectOptions: Array<string> = ['easy', 'medium', 'hard'];
	private recipeForm: FormGroup;
	private targetRecipe: RecipeClass;
	private index: number;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private aSheetCtrl: ActionSheetController,
		private alertCtrl: AlertController,
		private toastProvider: ToastProvider,
		private recipeProvider: RecipesProvider,
		private ingredientProvider: IngredientProvider
	) { }

	ngOnInit() {
		this.editMode = this.navParams.get('mode');
		this.toastProvider.toastWithMsg(`Mode is: ${this.editMode} Recipe.`);
		switch (this.editMode) {
			case 'Edit':
				this.targetRecipe = this.navParams.get('recipe');
				this.index = this.navParams.get('index');
				break;
			default:
				break;
		}
		this.initRecipeFormGroup();
	}

	private initRecipeFormGroup() {
		let title = null;
		let description = null;
		let difficulty = 'medium';
		let ingredients = [];
		if (this.editMode === 'Edit') {
			title = this.targetRecipe.title;
			description = this.targetRecipe.description;
			difficulty = this.targetRecipe.difficulty;
			const passInIngres = this.targetRecipe.ingredients;
			if (passInIngres.length > 0) {
				for (const ingredient of passInIngres) {
					ingredients.push(new FormControl(ingredient.name, Validators.required));
				}
			} else {
				ingredients = [];
			}
		}
		this.recipeForm = new FormGroup({
			'title': new FormControl(title, Validators.required),
			'description': new FormControl(description, Validators.required),
			'difficulty': new FormControl(difficulty, Validators.required),
			'ingredients': new FormArray(ingredients)
		});
	}

	private createNewIngredientAlert() {
		return this.alertCtrl.create({
			title: 'Add Ingredients',
			inputs: [
				{
					name: 'name',
					type: 'text',
					placeholder: 'Name'
				}
			],
			buttons: [
				{
					text: 'Add Ingredient',
					handler: (data) => {
						if (data.name.trim() === '' || data.name === null) {
							this.toastProvider.toastWithMsg('Pls input valid value.');
							return;
						}
						const ingredientArr = (<FormArray>this.recipeForm.get('ingredients'));
						ingredientArr.push(new FormControl(data.name, Validators.required));
						this.toastProvider.toastWithMsg('Ingredient is added.');
					}
				},
				{
					text: 'Cancle',
					role: 'cancle'
				}
			]
		});
	}

	manageIngredient() {
		const asheet = this.aSheetCtrl.create({
			title: 'what is the action for ingredient?',
			buttons: [
				{
					text: 'Add Ingredient',
					handler: () => {
						this.createNewIngredientAlert().present();
					}
				},
				{
					text: 'Remove Ingredients',
					handler: () => {
						const ingreArr: FormArray = (<FormArray>this.recipeForm.get('ingredients'));
						if (ingreArr.length > 0) {
							const removeIngresAlert = this.alertCtrl.create({
								title: 'Are u sure?',
								subTitle: 'Are you sure to remove ingredients?',
								buttons: [
									{
										text: 'Disagree',
										role: 'cancle',
										handler: () => {
											this.ingredientProvider.doRemoveIngredients(false);
										}
									},
									{
										text: 'Agree',
										handler: () => {
											this.ingredientProvider.doRemoveIngredients(true);
										}
									}
								]
							});
							removeIngresAlert.present();
							removeIngresAlert.onDidDismiss(() => {
								const isRemoveable: Boolean = this.ingredientProvider.isRemoveIngredient;
								if (isRemoveable) {
									for (let i = ingreArr.length - 1; i >= 0; i--) {
										ingreArr.removeAt(i);
									}
									this.toastProvider.toastWithMsg('Ingredients are removed.');
								} else {
									this.toastProvider.toastWithMsg('Keep All Ingredients.');
								}
							});
						} else {
							this.toastProvider.toastWithMsg('Ingredient list is empty..');
						}
					}
				},
				{
					text: 'Cancle',
					role: 'cancle'
				}
			]
		});
		asheet.present();
	}

	onRecipeSubmit() {
		const fVal = this.recipeForm.value;
		let ingres: Ingredient[] = [];
		console.log('133 -- form value: ', fVal);
		if (fVal.ingredients.length > 0) {
			ingres = fVal.ingredients.map((ingName: string) => {
				return {
					name: ingName,
					amount: 1
				}
			});
		}
		switch (this.editMode) {
			case 'Edit':
				this.recipeProvider.updateRecipe(this.index, fVal.title, fVal.description, fVal.difficulty, ingres);
				break;
			default:
				this.recipeProvider.addRecipe(fVal.title, fVal.description, fVal.difficulty, ingres);
				break;
		}
		this.recipeForm.reset();
		this.navCtrl.popToRoot();
	}

}
