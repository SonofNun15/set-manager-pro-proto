/// <reference path='../../typings/angularjs/angular.d.ts' />

/// <reference path='registrationController.ts' />

module sm.login {
	'use strict';

	angular.module('sm.registration', [
		'ngMessages',
		'ngMaterial',
	]).controller(controllerName, RegistrationController)
	.config(routeConfiguration);

	routeConfiguration.$inject = ['$locationProvider'];
	function routeConfiguration($locationProvider: angular.ILocationProvider): void {
		'use strict';
		$locationProvider.html5Mode(true);
	}
}
