import { Component } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File, Entry, FileError } from '@ionic-native/file';
import { RecipeBookPage } from '../recipe-book/recipe-book';

@Component({
	selector: 'page-native-plugs',
	templateUrl: 'native-plugs.html',
})
export class NativePlugsPage {
	private currentLocation: {
		latitude: number;
		longitude: number;
	} = {
			latitude: -48,
			longitude: 56
		};

	constructor(
		private geolocation: Geolocation,
		private camera: Camera,
		private file: File
	) {
		this.getCurrLocation();
		this.cameraShow();
		this.doHaveLogo();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NativePlugsPage');
	}

	getCurrLocation() {
		this.geolocation.getCurrentPosition()
			.then((res) => {
				console.log('30 -- ', res.coords);
				this.currentLocation = res.coords;
			})
			.catch((err) => console.log('err: ', err));
	}

	cameraShow() {
		this.camera.getPicture({
			encodingType: this.camera.EncodingType.PNG,
			correctOrientation: true
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log('52 -- camera err: ', err));
	}

	doHaveLogo() {
		const logoPath = `../../assets/imgs/`;
		const fileName = `logo.png`;
		console.log('58 -- check log png. File and Camera must test in Device, Browser doesnot has cordova.');
		this.file.checkFile(logoPath, fileName)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	}

}
