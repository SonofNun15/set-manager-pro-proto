
module sm.login {
	export var controllerName: string = 'LoginController';

	export interface ILoginController {

	}

	export class LoginController implements ILoginController {
		test(): void {
			alert('TEST!');
		}
	}
}
