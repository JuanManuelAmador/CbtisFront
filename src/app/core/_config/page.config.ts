export class PageConfig {
	public defaults: any = {
		home: {
			page: {
				title: 'Inicio',
				desc: 'Instrucciones Iniciales'
			},
		},
		adminExams: {
			page: {
				title: 'Administración de Examenes',
				desc: 'Creación, Edición y Modificación de examenes'
			},
			createExam: {
				page: {
					title: 'Creación de Examen',
					desc: 'Creación examenes'
				},
				Questions: {
					page: {
						title: 'Preguntas del Examen',
						desc: 'Creación preguntas'
					},

				},

			},
		},

		dashboard: {
			page: {
				title: 'Dashboard',
				desc: 'Latest updates and statistic charts'
			},
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
