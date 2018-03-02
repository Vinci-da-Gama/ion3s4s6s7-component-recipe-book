import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { ComponentsRceipeBook } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipeBookPage } from '../pages/recipe-book/recipe-book';
import { NativePlugsPage } from '../pages/native-plugs/native-plugs';
import { ComponentsFeaturePage } from '../pages/components-feature/components-feature';

import { RightmenuButtonDirective } from '../shared/directives/rightmenu-button/rightmenu-button';
import { GridComps } from '../shared/directives/grid-comps/grid-comps';

@NgModule({
	declarations: [
		ComponentsRceipeBook,
		TabsPage,
		RecipeBookPage,
		NativePlugsPage,
		ComponentsFeaturePage,
		RightmenuButtonDirective,
		GridComps
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsRceipeBook),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		ComponentsRceipeBook,
		TabsPage,
		RecipeBookPage,
		NativePlugsPage,
		ComponentsFeaturePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		Camera,
		File,
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
