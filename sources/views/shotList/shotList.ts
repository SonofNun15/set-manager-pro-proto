/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../typings/angularfire/angularfire.d.ts' />

module sm.views.shotList {
	var mockShotList: IShot[] = [
		{
			scene: 'Final Battle',
			storyDay: '22',
			timeToShoot: '30min',
			shotDuration: '4 sec',
		},
		{
			scene: 'First Scene',
			storyDay: '22',
			timeToShoot: '30min',
			shotDuration: '2 sec',
		},
	];
	
	interface IShot {
		scene: string;
		storyDay: string;
		timeToShoot: string;
		shotDuration: string;
	}
	
	class ShotListController {
		shotList: AngularFireArray;
		newShot: IShot;
		
		static $inject: string[] = ['$firebaseArray'];
		constructor(firebaseArray : AngularFireArrayService) {
			var shotsRef = new Firebase("https://flickering-torch-2606.firebaseio.com/Shots");
			this.shotList = firebaseArray(shotsRef); 
		} 
		
		showShot(shot: IShot): void {
			console.log('scene: ' + shot.scene);
			console.log('storyDay: ' + shot.storyDay);
			console.log('timeToShoot: ' + shot.timeToShoot);
			console.log('shotDuration: ' + shot.shotDuration);
		}
		
		createShot(): void {
			this.shotList.$add(this.newShot);
			this.newShot = null;
		}
	}   
	
	function shotList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: 'views/shotList/shotList.html',
			controller: 'ShotListController',
			controllerAs: 'controller',
		};
	}
	
	angular.module('sm.views.shotList', ['firebase'])
		.directive('smShotList', shotList)
		.controller('ShotListController', ShotListController);
}