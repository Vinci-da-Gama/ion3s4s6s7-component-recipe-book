import { AlertConstructInterface } from '../interfaces/alert-obj';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { catchError, retry } from 'rxjs/operators';
import '../../shared/rxjsOps';

@Injectable()
export class ErrorhandlerProvider {

	constructor(
		private alertCtrl: AlertController
	) { }

	private presentErrorAlert(alertMsgObj: AlertConstructInterface) {
		const errorAlert = this.alertCtrl.create({
			title: alertMsgObj.title,
			message: alertMsgObj.message,
			buttons: [alertMsgObj.btnTxt]
		});
		errorAlert.present();
	}

	handleError(error, alertTitleBtn) {
		console.log('27 -- alertTitleBtn ', alertTitleBtn);
		console.log('28 -- err ', error);
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: String = '';
		if (error instanceof ErrorEvent) {
			// client side or network error.
			const err = error.message || JSON.stringify(error);
			errMsg = `Client side or network error -- ${error.filename || ''} ${err}`;
		} else {
			// backend or server side error.
			errMsg = `Backend Return error -- ${error.code} - ${error.message ? error.message : error.toString()}.`;
		}
		console.error(errMsg);
		alertTitleBtn['message'] = errMsg;
		this.presentErrorAlert(alertTitleBtn);
		return Observable.throw(errMsg);
	};

}
