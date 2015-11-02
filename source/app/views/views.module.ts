/// <reference path='../../../typings/angularjs/angular.d.ts' />

/// <reference path='adshot/adshot.module.ts' />
/// <reference path='schedule/schedule.ts' />
/// <reference path='shot/shot.module.ts' />
/// <reference path='shotList/shotList.ts' />
/// <reference path='project/project.module.ts' />
/// <reference path='projectList/projectList.ts' />
/// <reference path='contact/contact.module.ts' />
/// <reference path='contactList/contactList.ts' />

module sm.views {
	angular.module('sm.views', [
		'sm.views.shotList',
		'sm.views.shot',
		'sm.views.schedule',
		'sm.views.adshot',
		'sm.views.projectList',
		'sm.views.project',
		'sm.views.contactList',
		'sm.views.contact',
		'sm.views.crewList',
		'sm.views.crew',
	]);
}
