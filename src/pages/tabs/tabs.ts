import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { RecipeBookPage } from '../recipe-book/recipe-book';
import { NativePlugsPage } from '../native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../components-feature/components-feature';
import { componentFactoryName } from '@angular/compiler';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	// private defIdx: Number = 2;
	@ViewChild('hashTabs') tabRef: Tabs;

	private recipePage: any = RecipeBookPage;
	private nativePluginsPage: any = NativePlugsPage;
	private compPage: any = ComponentsFeaturePage;

	constructor(
		private navCtrl: NavController
	) { }

	ionViewDidLoad() {
		console.log('2nd way to choose init selected tab');
		this.tabRef.select(1);
	}

}
