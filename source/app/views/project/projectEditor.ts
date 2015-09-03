/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.views.projectEditor {
	export function projectEditor(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/project/projectEditor.html',
			scope: {
				project: '='
			}
		};
	}
}
