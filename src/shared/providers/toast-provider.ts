import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

	constructor(
		private http: HttpClient,
		private toastCtrl: ToastController
	) {
		console.log('Hello ToastProvider Provider');
	}

	toastWithMsg(msg: string) {
		const toast = this.toastCtrl.create({
			message: msg,
			duration: 1500,
			position: 'bottom'
		});
		toast.present();
	}

}
