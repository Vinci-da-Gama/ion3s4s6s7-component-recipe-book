import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FormProvider {

	constructor(
		private http: HttpClient
	) {
		console.log('Hello FormProvider Provider');
	}

	submitForm(form) {

	}

}
