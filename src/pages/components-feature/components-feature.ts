import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-components-feature',
	templateUrl: 'components-feature.html',
})
export class ComponentsFeaturePage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ComponentsFeaturePage');
	}

}
