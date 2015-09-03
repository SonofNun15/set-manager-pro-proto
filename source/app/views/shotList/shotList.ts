/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />

module sm.views.shotList {
	interface IShot {
		scene: string;
		storyDay: string;
		timeToShoot: string;
		shotDuration: string;
		shotImage: string;
		projectId: string;
	}

	class ShotListController {
		shotList: AngularFireArray;
		newShot: IShot;
		projectId: string;

		static $inject: string[] = ['$firebaseArray', '$stateParams', '$state'];
		constructor(firebaseArray: AngularFireArrayService, stateParams: any, state: any) {
			this.projectId = stateParams.projectId;
			var shotListsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/shotList');

			// create a query for the shotList for the current project
			var query: any = shotListsRef.orderByChild('projectId').equalTo(this.projectId);
			// the firebaseArray service properly handles database queries as well
			this.shotList = firebaseArray(query);


			
// 			var ref: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com');
// 			var projectsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/projects');
// 
// 			var authData: FirebaseAuthData = ref.getAuth();
// 			
// 			// create a query for the projects owned by the current user
// 			var query2: any = projectsRef.orderByChild('userId').equalTo(authData.uid);
// 			query2.on('value', (querySnapShot: FirebaseDataSnapshot): void => {
// 				var projectList: any = querySnapShot.val();
// 				// the firebaseArray service properly handles database queries as well
// 				// var projectList: AngularFireArray = firebaseArray(query2);			
// 				// var tId: string = projectList[0].$id;
// 				var x: any;
// 				for (x in projectList) {
// 					if (projectList.hasOwnProperty(x)) {
// 						this.projectId = x;
// 						break;
// 					}
// 				}
// 
// 				// For now we pick the first project for the current user. Later the projectId will be passed in.				
// 				// create a query for the shotList for the current project
// 				var query: any = shotListsRef.orderByChild('projectId').equalTo(this.projectId);
// 				// the firebaseArray service properly handles database queries as well
// 				this.shotList = firebaseArray(query);
// 				
// 			});
		}

		showShot(shot: IShot): void {
			console.log('scene: ' + shot.scene);
			console.log('storyDay: ' + shot.storyDay);
			console.log('timeToShoot: ' + shot.timeToShoot);
			console.log('shotDuration: ' + shot.shotDuration);
		}

		createShot(): void {
			this.newShot.projectId = this.projectId; 
			this.shotList.$add(this.newShot);
			this.newShot = null;
		}

		deleteShot(shot: IShot): void {
			this.shotList.$remove(shot);
		}

		editShot(shot: IShot): void {
			this.shotList.$save(shot);
		}
	}

	function shotList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/shotList/shotList.html',
			controller: 'ShotListController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.shotList', ['firebase'])
		.directive('smShotList', shotList)
		.controller('ShotListController', ShotListController);
}
