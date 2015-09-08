/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.views.contactEditor {
	export function contactEditor(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/contact/contactEditor.html',
			scope: {
				contact: '='
			}
		};
	}
}
