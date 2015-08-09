
module sm.login {
	export var controllerName: string = 'LoginController';

	interface IUser {
		username: string;
		password: string;
	}

	export interface ILoginController {
		submit(): void;
	}

	export class LoginController implements ILoginController {
		private user: IUser;

		constructor() {
			this.user = {
				username: '',
				password: '',
			};
		}

		submit(): void {
			alert('Hello, ' + this.user.username);
		}
	}
}
