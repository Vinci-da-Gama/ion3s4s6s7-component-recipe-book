import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-components-feature',
	templateUrl: 'components-feature.html',
})
export class ComponentsFeaturePage {
	private tabTimes: Number = 0;
	private pressTimes: Number = 0;
	private panTimes: Number = 0;
	private swipeTimes: Number = 0;
	private pinchTimes: Number = 0;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ComponentsFeaturePage');
	}

	onGesture(e) {
		switch (e.type) {
			case 'tap':
				this.tabTimes += e.tapCount;
				break;
			case 'press':
				this.pressTimes += e.eventType;
				break;
			case 'pan':
				this.panTimes += e.srcEvent.pointerId;
				break;
			case 'swipe':
				this.swipeTimes += e.changedPointers.length;
				break;
			case 'rotate':
				console.log(e);
				break;
			case 'pinch':
				console.log(e);
				break;
			default:
				break;
		}
	}


}
