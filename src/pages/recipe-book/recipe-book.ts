import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-recipe-book',
	templateUrl: 'recipe-book.html',
})
export class RecipeBookPage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad RecipeBookPage');
	}

}
