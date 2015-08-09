
module sm.login {
	export var controllerName: string = 'LoginController';

	export interface ILoginController {

	}

	export class LoginController implements ILoginController {
		static $inject: string[] = ['$scope'];
		constructor(private $scope: any) {
			$scope.test = this.test;
		}

		test(): void {
			alert('TEST!');
		}
	}
}
