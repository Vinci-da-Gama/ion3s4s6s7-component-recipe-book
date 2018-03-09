import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-signin-signup',
	templateUrl: 'signin-signup.html',
})
export class SigninSignupPage implements OnInit {

	private siulMode: String = '';

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ngOnInit() {
		this.siulMode = this.navParams.data;
		console.log('19 -- : ', this.siulMode);
	}

}
