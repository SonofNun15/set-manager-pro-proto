/// <reference path='../typings/angularjs/angular.d.ts' />

module sm {
	'use strict';

	angular.module('sm', [
		'ngMaterial',
		'ui.router',

		'sm.config',
		'sm.views',
	]);
}
