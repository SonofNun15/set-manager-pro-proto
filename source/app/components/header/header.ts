/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.components.header {
	export var moduleName: string = 'sm.components.header';
	export var directiveName: string = 'smHeader';

	function headerDirective(): ng.IDirective {
		return {
			restrict: 'E',
			templateUrl: '/components/header/header.html',
		};
	}

	angular.module(moduleName, [])
		.directive(directiveName, headerDirective);
}
