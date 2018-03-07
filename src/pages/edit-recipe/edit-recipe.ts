import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import {
	NavController,
	NavParams,
	ActionSheetController,
	AlertController,
	ToastController
} from 'ionic-angular';
import { FormatWidth } from '@angular/common';

@Component({
	selector: 'page-edit-recipe',
	templateUrl: 'edit-recipe.html',
})
export class EditRecipePage implements OnInit {

	private editMode: String = '';
	private selectOptions: Array<string> = ['easy', 'medium', 'hard'];
	private recipeForm: FormGroup;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private aSheetCtrl: ActionSheetController,
		private alertCtrl: AlertController,
		private toastCtrl: ToastController
	) { }

	ngOnInit() {
		this.editMode = this.navParams.get('mode');
		this.initRecipeFormGroup();
		console.log('22 -- Edit Mode is: ', this.editMode);
	}

	private initRecipeFormGroup() {
		this.recipeForm = new FormGroup({
			'title': new FormControl(null, Validators.required),
			'description': new FormControl(null, Validators.required),
			'difficulty': new FormControl('medium', Validators.required),
			'ingredients': new FormArray([])
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
					text: 'Cancle',
					role: 'cancle'
				},
				{
					text: 'Add Ingredient',
					handler: (data) => {
						if (data.name.trim() === '' || data.name === null) {
							const noNameToast = this.toastCtrl.create({
								message: 'Pls input valid value.',
								duration: 1500,
								position: 'bottom'
							});
							noNameToast.present();
							return;
						}
						const ingredientArr = (<FormArray>this.recipeForm.get('ingredients'));
						ingredientArr.push(new FormControl(data.name, Validators.required));
						const addIngreToast = this.toastCtrl.create({
							message: 'Ingredient is added.',
							duration: 1500,
							position: 'bottom'
						});
						addIngreToast.present();
					}
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
							for (let i = ingreArr.length - 1; i >= 0; i--) {
								ingreArr.removeAt(i);
							}
							const removeIngredientsToast = this.toastCtrl.create({
								message: 'Ingredients are removed.',
								duration: 1500,
								position: 'bottom'
							});
							removeIngredientsToast.present();
						} else {
							const emptyListToast = this.toastCtrl.create({
								message: 'Ingredient list is empty.',
								duration: 1500,
								position: 'bottom'
							});
							emptyListToast.present();
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
		console.log('34 -- recipe form: ', this.recipeForm);
		this.recipeForm.reset();
	}

}
