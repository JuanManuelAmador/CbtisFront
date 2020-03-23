// Angular
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {routerNavigatedAction} from '@ngrx/router-store';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './createExam.component.html',
	styleUrls: ['createExam.component.scss'],
})
export class CreateExamComponent implements OnInit, AfterViewInit  {
	@ViewChild('wizard', {static: true}) el: ElementRef;
	todayNumber: number = Date.now();
	model: any = {
		examID : this.todayNumber,
		examName : 'PER2020',
		examDate : '25/03/2020',
		examQuestions: 15,
		examTime : 160
	};
	toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

	submitted = false;
	toppings: any;


	constructor() {

	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		// Initialize form wizard
		const wizard = new KTWizard(this.el.nativeElement, {
			startStep: 1
		});

		// Validation before going to next page
		wizard.on('beforeNext', (wizardObj) => {
			// https://angular.io/guide/forms
			// https://angular.io/guide/form-validation

			// validate the form and use below function to stop the wizard's step
			// wizardObj.stop();
		});

		// Change event
		wizard.on('change', () => {
			setTimeout(() => {
				KTUtil.scrollTop();
			}, 500);
		});
	}

}
