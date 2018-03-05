import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { NativePlugsPage } from '../native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../components-feature/components-feature';

@Component({
	selector: 'page-cnp-tabs',
	templateUrl: 'cnp-tabs.html',
})
export class CnpTabsPage {

	// private defIdx: Number = 2;
	@ViewChild('cpnTabs') tabRef: Tabs;

	private nativePluginsPage: any = NativePlugsPage;
	private compPage: any = ComponentsFeaturePage;

	constructor(
		private navCtrl: NavController
	) { }

	ionViewDidLoad() {
		console.log('2nd way to choose init selected tab');
		this.tabRef.select(1);
	}

	findActivePage() {
		// const pageName = this.navCtrl.getActive().name;
		console.log('31 -- ');
	}

}
