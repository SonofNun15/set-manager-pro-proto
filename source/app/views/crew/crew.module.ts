/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='./crewView.ts' />

module sm.views.crew {
	angular.module('sm.views.crew', [])
		.directive('smCrewView', sm.views.crewView.crewView);
}
