/// <reference path='../../../typings/angularjs/angular.d.ts' />

module sm.views.shotView {
	export function shotView(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/shot/shotView.html',
			scope: {
				shot: '=',
				deleteShot: '&',
				editShot: '&',
			}
		};
	}
}
