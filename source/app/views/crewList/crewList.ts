/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />
/// <reference path='../../../../typings/angular-ui-router/angular-ui-router.d.ts' />

module sm.views.crewList {
	interface ICrew {
		firstName: string;
		lastName: string;
	}

	class CrewListController {
		userId: string;
		crewList: AngularFireArray;
		newCrew: ICrew;
		state: any;
		projectId: string;
		// crew2List: ICrew[];

		static $inject: string[] = ['$firebaseArray', '$stateParams', '$state'];
		constructor(private firebaseArray: AngularFireArrayService, stateParams: any, state: any) {
			this.state = state;
			this.projectId = stateParams.projectId;
			var ref: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com');
			var crewRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/contacts');
			// var projectsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/projects/' + this.projectId);

			var authData: FirebaseAuthData = ref.getAuth();
			this.userId = authData.uid;

			// Get the crew owned by the current user
			var query: any = crewRef.orderByChild('userId').equalTo(this.userId);
			this.crewList = firebaseArray(query);
		}

		showCrew(crew: ICrew): void {
			console.log('Crew Name = ' + crew.firstName + ' ' + crew.lastName);
		}

		addCrew(): void {
			// var userRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId);
			// userRef.once('value', (userRefSnap: FirebaseDataSnapshot): void => {
			// 	if (userRefSnap.val() != null) {
			// 		this.newCrew.userId = this.userId;
			// 		this.crewList.$add(this.newCrew).then((ref: Firebase): void => {
			// 			var id: string = ref.key();
			// 			console.log('added crew with id ' + id);
			// 			this.newCrew = null;
			// 		});
			// 	}
			// });
		}

		deleteCrew(crew: ICrew): void {
			this.crewList.$remove(crew);
		}
	}

	function crewList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/crewList/crewList.html',
			controller: 'CrewListController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.crewList', ['firebase'])
		.directive('smCrewList', crewList)
		.controller('CrewListController', CrewListController);
}
