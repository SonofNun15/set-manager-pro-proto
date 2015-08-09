/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />

module sm.views.schedule {
	interface IShot {
		scene: string;
		storyDay: string;
		timeToShoot: string;
		shotDuration: string;
	}

	class ScheduleController {
		schedule: AngularFireArray;

		static $inject: string[] = ['$firebaseArray'];
		constructor(firebaseArray: AngularFireArrayService) {
			var shotsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/Shots');
			this.schedule = firebaseArray(shotsRef);
		}

		showShot(shot: IShot): void {
			console.log('scene: ' + shot.scene);
			console.log('storyDay: ' + shot.storyDay);
			console.log('timeToShoot: ' + shot.timeToShoot);
			console.log('shotDuration: ' + shot.shotDuration);
		}

		editShot(shot: IShot): void {
			this.schedule.$save(shot);
		}
	}

	function schedule(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/schedule/schedule.html',
			controller: 'ScheduleController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.schedule', ['firebase'])
		.directive('smSchedule', schedule)
		.controller('ScheduleController', ScheduleController);
}
