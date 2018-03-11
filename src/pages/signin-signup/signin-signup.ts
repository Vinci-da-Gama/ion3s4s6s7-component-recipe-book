import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { NavController, NavParams, LoadingController, Events } from 'ionic-angular';

// import { RecipesPage } from '../recipes/recipes';
import { RecipesTabsSubrootPage } from '../../pages/recipes-tabs-subroot/recipes-tabs-subroot';
import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';
import { AuthUserService } from '../../services/auth-user';

@Component({
	selector: 'page-signin-signup',
	templateUrl: 'signin-signup.html',
})
export class SigninSignupPage implements OnInit {

	private siulMode: string;
	private isAuthenUser: Boolean = false;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private loadCtrl: LoadingController,
		private events: Events,
		private errHandler: ErrorhandlerProvider,
		private authUser: AuthUserService
	) { }

	ngOnInit() {
		this.siulMode = this.navParams.get('title') ? this.navParams.get('title') : 'Sign-Up';
		this.events.subscribe('user:auth', (isAuthen: Boolean) => {
			this.isAuthenUser = isAuthen;
			console.log('32 -- ', this.isAuthenUser);
		});
	}

	onUserSubmit(f: NgForm) {
		const fVal = f.value;
		console.log('33 -- fVal: ', fVal);
		const spinner = this.loadCtrl.create({
			content: `${this.siulMode} ...`
		});
		spinner.present();
		switch (this.siulMode) {
			case 'Sign-Up':
				this.authUser.fbSignup(fVal.useremail, fVal.userpassword)
					.then((res) => {
						console.log('41 -- ', res);
						// may need Events
						spinner.dismiss();
						this.navCtrl.push(RecipesTabsSubrootPage);
					})
					.catch((err) => {
						this.errHandler.handleException(err, this.siulMode, spinner);
					});
				break;
			case 'Sign-In':
				this.authUser.fbSignin(fVal.useremail, fVal.userpassword)
					.then((res) => {
						console.log('53 -- ', res);
						// may need Events
						spinner.dismiss();
						this.navCtrl.push(RecipesTabsSubrootPage);
					})
					.catch((err) => {
						this.errHandler.handleException(err, this.siulMode, spinner);
					});
				break;
			default:
				break;
		}
	}

}
