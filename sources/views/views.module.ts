/// <reference path='../../typings/angularjs/angular.d.ts' />

/// <reference path='adshot/adshot.module.ts' />
/// <reference path='schedule/schedule.ts' />
/// <reference path='shot/shot.module.ts' />
/// <reference path='shotList/shotList.ts' />

module sm.views {
	angular.module('sm.views', [
		'sm.views.shotList',
		'sm.views.shot',
		'sm.views.schedule',
		'sm.views.adshot',
	]);
}
