import { Component } from '@angular/core';
import { /* NavController, NavParams,  */ViewController } from 'ionic-angular';

@Component({
	selector: 'page-storeload',
	templateUrl: 'storeloadpage.html',
})
export class StoreLoadPage {

	constructor(
		private viewCtrl: ViewController
	) { }

	onSlAction(dbAction: string) {
		this.viewCtrl.dismiss({
			action: dbAction
		});
	}

}
