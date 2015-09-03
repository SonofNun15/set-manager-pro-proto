/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='./projectEditor.ts' />
/// <reference path='./projectView.ts' />

module sm.views.project {
	angular.module('sm.views.project', [])
		.directive('smProjectEditor', sm.views.projectEditor.projectEditor)
		.directive('smProjectView', sm.views.projectView.projectView);
}
