import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CnpTabsPage } from '../cnp-tabs/cnp-tabs';

@Component({
	selector: 'page-compo-native-tabs',
	templateUrl: 'compo-native-tabs.html',
})
export class CompoNativeTabsPage {

	private cpnPage: any = CnpTabsPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad CompoNativeTabsPage');
	}

}
