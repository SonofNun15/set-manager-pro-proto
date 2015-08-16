
module sm.login {
	export var controllerName: string = 'LoginController';

	interface IUser {
		email: string;
		password: string;
	}

	export interface ILoginController {
		submit(): void;
		googleLogin(): void;
		twitterLogin(): void;
		gitHubLogin(): void;
		facebookLogin(): void;
	}

	export class LoginController implements ILoginController {
		private user: IUser;
		private firebaseRef: Firebase;
		
		static $inject: string[] = ['$window', '$location'];
		constructor(private $window: ng.IWindowService, private $location: ng.ILocationService) {
			this.firebaseRef = new Firebase('https://flickering-torch-2606.firebaseio.com');

			this.user = {
				email: '',
				password: '',
			};
		
			this.firebaseRef.onAuth(this.handleAuthenticated);	
		}

		submit(): void {
			this.firebaseRef.authWithPassword({
				email    : this.user.email,
				password : this.user.password,
			}, this.authHandler);
//			alert('Hello, ' + this.user.email);
		}

		googleLogin(): void {
			var ref: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com');

			// prefer pop-ups, so we don't navigate away from the page
			ref.authWithOAuthPopup('google', function(error: any, authData: FirebaseAuthData): void {
				if (error) {
					if (error.code === 'TRANSPORT_UNAVAILABLE') {
						// fall-back to browser redirects, and pick up the session
						// automatically when we come back to the origin page
						ref.authWithOAuthRedirect('google', function(error: any): void { /* ... */ });
					}
				} else if (authData) {
					// user authenticated with Firebase
				}
			});
			// alert('google');
		}

		twitterLogin(): void {
			alert('twitter');
		}

		gitHubLogin(): void {
			alert('github');
		}

		facebookLogin(): void {
			alert('facebook');
		}

		private authHandler(): void {
			alert('logged in!');
		}
		
		private handleAuthenticated: { (authData: FirebaseAuthData): void } = 
			(authData: FirebaseAuthData): void => {
				if (authData != null) {
					this.$location.search('token', authData.token);
					this.$window.location.replace(this.$location.absUrl());
				}
			};
	}
}
