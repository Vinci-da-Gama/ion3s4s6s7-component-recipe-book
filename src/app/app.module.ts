import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsRceipeBook } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
	declarations: [
		ComponentsRceipeBook,
		HomePage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsRceipeBook),
		HttpModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		ComponentsRceipeBook,
		HomePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
