import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';
import { AuthUserService } from '../../services/auth-user';

@Component({
	selector: 'page-signin-signup',
	templateUrl: 'signin-signup.html',
})
export class SigninSignupPage implements OnInit {

	private siulMode: string;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private loadCtrl: LoadingController,
		private alertCtrl: AlertController,
		private errHandler: ErrorhandlerProvider,
		private authUser: AuthUserService
	) { }

	ngOnInit() {
		this.siulMode = this.navParams.get('title') ? this.navParams.get('title') : 'Sign-Up';
	}

	onUserSubmit(f: NgForm) {
		const fVal = f.value;
		console.log('26 -- fVal: ', fVal);
		const spinner = this.loadCtrl.create({
			content: 'Signing u up...'
		});
		spinner.present();
		switch (this.siulMode) {
			case 'Sign-Up':
				this.authUser.fbSignup(fVal.useremail, fVal.userpassword)
					.then((res) => {
						console.log('34 -- ', res.json());
						spinner.dismiss();
					})
					.catch((err) => {
						const alertMsg = {
							title: 'Sign-up Error',
							btnTxt: 'I see'
						};
						this.errHandler.handleError(err, alertMsg);
						spinner.dismiss();
					});
				break;
			case 'Sign-In':
				break;
			default:
				break;
		}
	}

}
