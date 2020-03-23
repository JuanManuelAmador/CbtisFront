// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
// Widgets model
import { LayoutConfigService } from '../../../core/_base/layout';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './adminExams.component.html',
	styleUrls: ['adminExams.component.scss'],
})
export class AdminExamsComponent implements OnInit {

	constructor(private layoutConfigService: LayoutConfigService) {
	}

	ngOnInit(): void {
	}
}
