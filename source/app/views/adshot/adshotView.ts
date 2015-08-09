/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.views.adshotView {
	export function adshotView(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/adshot/adshotView.html',
			scope: {
				shot: '=',
				editShot: '&',
			}
		};
	}
}
