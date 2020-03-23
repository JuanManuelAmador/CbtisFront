// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
// Widgets model
import { LayoutConfigService } from '../../../core/_base/layout';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './adminQuestions.component.html',
	styleUrls: ['adminQuestions.component.scss'],
})
export class AdminQuestionsComponent implements OnInit {

	constructor(private layoutConfigService: LayoutConfigService) {
	}

	ngOnInit(): void {
	}
}
