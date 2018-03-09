import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { RecipeClass } from '../../shared/models/recipe';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { ConfirmRemoveModal } from '../../shared/modals/remove-modal/confirm-remove-modal';

import { ShoppinglistProvider } from '../../shared/providers/shoppinglist-provider';
import { RecipesProvider } from '../../shared/providers/recipes-provider';

@Component({
	selector: 'page-recipe-details',
	templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage implements OnInit {

	private recipe: RecipeClass;
	private rIds: number;
	private slPage: any = ShoppingListPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private modalCtrl: ModalController,
		private slProvider: ShoppinglistProvider,
		private rProvider: RecipesProvider
	) { }

	ngOnInit() {
		this.recipe = this.navParams.get('targetRecipe');
		this.rIds = this.navParams.get('index');
	}

	onAddIngredientsToShoppingList() {
		this.slProvider.addMultiIngredient(this.recipe.ingredients);
	}

	onEditRecipt() {
		this.navCtrl.push(EditRecipePage, {
			mode: 'Edit',
			recipe: this.recipe,
			index: this.rIds
		});
	}

	onDeleteRecipe() {
		const rmModal = this.modalCtrl.create(ConfirmRemoveModal, this.recipe);
		rmModal.present();
		rmModal.onDidDismiss((removeable: boolean) => {
			if (removeable) {
				this.rProvider.removeRecipe(this.rIds);
				this.navCtrl.popToRoot();
			} else {
				return;
			}
		});
	}
}
