/// <reference path='../../typings/angularjs/angular.d.ts' />

module sm.login {
	export var controllerName: string = 'RegistrationController';

	export interface IRegistrationController {
	}

	export class RegistrationController implements IRegistrationController {
		static $inject: string[] = ['$location'];
		constructor(private $location: ng.ILocationService) {

		}
	}
}
