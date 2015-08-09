/// <reference path='../../typings/angularjs/angular.d.ts' />

/// <reference path='loginController.ts' />

module sm.login {
	'use strict';

	angular.module('sm.login', [
		'ngMaterial',
	]).controller(controllerName, LoginController);
;
}
