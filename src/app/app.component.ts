import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompoNativeTabsPage } from '../pages/compo-native-tabs/compo-native-tabs';
import { RecipesTabsSubrootPage } from '../pages/recipes-tabs-subroot/recipes-tabs-subroot';

@Component({
	templateUrl: 'app.html'
})
export class ComponentsRceipeBook {

	@ViewChild('appMenuNavContent') nav: NavController;
	private compoNatiPlugPage: any = CompoNativeTabsPage;
	private recipesPage: any = RecipesTabsSubrootPage;

	constructor(
		private platform: Platform,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen,
		private menuCtrl: MenuController
	) {
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	onLoadPage(page: any) {
		this.nav.setRoot(page);
		this.menuCtrl.close();
	}
}
