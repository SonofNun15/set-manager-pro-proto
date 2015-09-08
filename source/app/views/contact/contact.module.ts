/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='./contactEditor.ts' />
/// <reference path='./contactView.ts' />

module sm.views.contact {
	angular.module('sm.views.contact', [])
		.directive('smContactEditor', sm.views.contactEditor.contactEditor)
		.directive('smContactView', sm.views.contactView.contactView);
}
