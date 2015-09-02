/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.views.projectView {
	export function projectView(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/project/projectView.html',
			scope: {
				project: '=',
				deleteProject: '&',
				editProject: '&',
			}
		};
	}
}
