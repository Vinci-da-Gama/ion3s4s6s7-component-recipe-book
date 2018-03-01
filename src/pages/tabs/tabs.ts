import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecipeBookPage } from '../recipe-book/recipe-book';
import { NativePlugsPage } from '../native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../components-feature/components-feature';
import { componentFactoryName } from '@angular/compiler';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	private defIdx: Number = 1;
	private recipePage: any = RecipeBookPage;
	private nativePluginsPage: any = NativePlugsPage;
	private compPage: any = ComponentsFeaturePage;

	constructor(
		private navCtrl: NavController
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabsPage');
	}

}
