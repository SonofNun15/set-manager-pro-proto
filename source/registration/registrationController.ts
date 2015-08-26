/// <reference path='../../typings/angularjs/angular.d.ts' />

module sm.login {
	export var controllerName: string = 'RegistrationController';

	export interface IRegistrationController {
		referralOptions: string[];
	}

	export class RegistrationController implements IRegistrationController {
		referralOptions: string[];

		static $inject: string[] = ['$location'];
		constructor(private $location: ng.ILocationService) {
			this.referralOptions = [
				'Suggested by friend',
				'Google search',
				'Other',
			];
		}
	}
}
