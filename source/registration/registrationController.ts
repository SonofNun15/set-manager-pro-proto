/// <reference path='../../typings/angularjs/angular.d.ts' />

module sm.login {
	export var controllerName: string = 'RegistrationController';

	interface INewUser {
		givenName: string;
		familyName: string;
		phone: string;
		email: string;
		referral: string;
		biography: string;
	}
	export interface IRegistrationController {
		referralOptions: string[];
	}

	export class RegistrationController implements IRegistrationController {
		referralOptions: string[];
		private user: INewUser;

		constructor() {
			this.referralOptions = [
				'Suggested by friend',
				'Google search',
				'Other',
			];
			
			this.user = {
				givenName: '',
				familyName: '',
				phone: '',
				email: '',
				referral: '',
				biography: ''
			};
		}

		submit(): void {
			// TODO: Get new user GUID
			var newUserGUID: string = '12345';
			var newUsersRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/newUsers');
			newUsersRef.child(newUserGUID).set({
				firstName: this.user.givenName,
				lastName: this.user.familyName,
				phone : this.user.phone,
				email: this.user.email,
				referral: this.user.referral,
				bio: this.user.biography
			});
			// TODO: Send e-mail with link
		}
	}
}
