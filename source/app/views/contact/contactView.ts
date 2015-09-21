/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.views.contactView {
	export function contactView(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/contact/contactView.html',
			scope: {
				contact: '=',
				deleteContact: '&',
				editContact: '&',
			}
		};
	}
}
