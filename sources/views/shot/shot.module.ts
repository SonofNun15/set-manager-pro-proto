/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='./shotEditor.ts' />
/// <reference path='./shotView.ts' />

module sm.views.shot {
	angular.module('sm.views.shot', [])
		.directive('smShotEditor', sm.views.shotEditor.shotEditor)
		.directive('smShotView', sm.views.shotView.shotView);
}