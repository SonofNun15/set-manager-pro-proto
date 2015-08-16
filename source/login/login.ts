/// <reference path='../../typings/angularjs/angular.d.ts' />

/// <reference path='loginController.ts' />

module sm.login {
	'use strict';

	angular.module('sm.login', [
		'ngMessages',
		'ngMaterial',
	]).controller(controllerName, LoginController)
	.config(routeConfiguration);
	
	routeConfiguration.$inject = ['$locationProvider'];
	function routeConfiguration($locationProvider: angular.ILocationProvider): void {
		'use strict';
		$locationProvider.html5Mode(true);
	}
}
