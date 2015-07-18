/// <reference path='../../../typings/angularjs/angular.d.ts' />

module sm.views.shotList {
	function shotList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: 'views/shotList/shotList.html',
		};
	}
	
	angular.module('sm.views.shotList', [])
		.directive('smShotList', shotList);
}