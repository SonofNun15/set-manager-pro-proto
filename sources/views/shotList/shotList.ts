/// <reference path='../../../typings/angularjs/angular.d.ts' />

module sm.views.shotList {
	class ShotListController {
		scene: string;
		storyDay: string;
		timeToShoot: string;
		shotDuration: string;
		
		showShot(): void {
			console.log('scene: ' + this.scene);
			console.log('storyDay: ' + this.storyDay);
			console.log('timeToShoot: ' + this.timeToShoot);
			console.log('shotDuration: ' + this.shotDuration);
		}
	}   
	
	function shotList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: 'views/shotList/shotList.html',
			controller: 'ShotListController',
			controllerAs: 'shotList',
		};
	}
	
	angular.module('sm.views.shotList', [])
		.directive('smShotList', shotList)
		.controller('ShotListController', ShotListController);
}