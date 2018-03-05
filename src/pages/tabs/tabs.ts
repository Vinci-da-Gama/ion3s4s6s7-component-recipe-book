import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { RecipesTabsSubrootPage } from '../recipes-tabs-subroot/recipes-tabs-subroot';
import { NativePlugsPage } from '../native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../components-feature/components-feature';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	// private defIdx: Number = 2;
	@ViewChild('hashTabs') tabRef: Tabs;

	// private recipePage: any = RecipesTabsSubrootPage;
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
