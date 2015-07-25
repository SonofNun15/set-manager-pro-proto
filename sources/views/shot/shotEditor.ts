/// <reference path='../../../typings/angularjs/angular.d.ts' />

module sm.views.shotEditor {
	export function shotEditor():ng.IDirective{
		'use strict';
		return {
			restrict:'E', 
			templateUrl: '/views/shot/shotEditor.html',
			scope: {
				shot: '='
			}
		}
	}
}