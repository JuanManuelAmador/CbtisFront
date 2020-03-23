// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { CreateExamComponent } from './createExam.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule, MatDatepickerModule, MatInputModule, MatFormFieldModule} from '@angular/material';
@NgModule({
	imports: [
		MatDatepickerModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CreateExamComponent
			},
		]),
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	declarations: [
		CreateExamComponent,
	]
})
export class CreateExamModule {
}
