/// <reference path='../../typings/angularjs/angular.d.ts' />
/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />

module sm.config {
	angular.module('sm.config', [
		'ui.router',
	]).config(routeConfiguration)
	.config(routes);

	routeConfiguration.$inject = [
		'$locationProvider',
		'$urlRouterProvider',
	];
	function routeConfiguration($locationProvider: angular.ILocationProvider,
								$urlRouterProvider: angular.ui.IUrlRouterProvider): void {
		'use strict';
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	}

	routes.$inject = ['$stateProvider']; // Include $state if necessary to init
	function routes($stateProvider: ng.ui.IStateProvider): void {
		$stateProvider
			.state('shotList', {
				url: '/app/shotList',
				templateUrl: '/views/shotList/shotList.html',
			});
	}
}
