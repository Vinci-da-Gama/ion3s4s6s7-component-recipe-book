import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-confirm-remove-modal',
	templateUrl: 'confirm-remove-modal.html',
})
export class ConfirmRemoveModal {

	private recipeTitle: string;
	private recipeDescription: string;
	private recipeDifficulty: string;

	constructor(
		private viewCtrl: ViewController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		this.recipeTitle = this.navParams.get('title');
		this.recipeDescription = this.navParams.get('description');
		this.recipeDifficulty = this.navParams.get('difficulty');
	}

	onRemove(isRemoveable: boolean = false) {
		this.viewCtrl.dismiss(isRemoveable);
	}

	onClose() {
		this.viewCtrl.dismiss();
	}
}
