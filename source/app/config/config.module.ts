/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/angular-ui-router/angular-ui-router.d.ts' />

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
			.state('dashboard', {
				url: '/',
				template: '<h1>Dashboard</h1>',
			})
			.state('projectList', {
				url: '/projectList',
				templateUrl: '/views/projectList/projectList.html',
				controller: 'ProjectListController',
				controllerAs: 'controller',
			})
			.state('contacts', {
				url: '/contacts',
				template: '<h1>Contacts</h1>',
			})
			.state('shotList', {
				url: '/shotList/:projectId',
 				templateUrl: '/views/shotList/shotList.html',
				controller: 'ShotListController',
				controllerAs: 'controller',
			})
			.state('schedule', {
				url: '/schedule',
				templateUrl: '/views/schedule/schedule.html',
				controller: 'ScheduleController',
				controllerAs: 'controller',
			});
	}
}
