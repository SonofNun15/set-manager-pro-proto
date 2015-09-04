/// <reference path='../../../../typings/angularjs/angular.d.ts' />

module sm.components.footer {
	export var moduleName: string = 'sm.components.footer';
	export var directiveName: string = 'smFooter';

	function footerDirective(): ng.IDirective {
		return {
			restrict: 'E',
			templateUrl: '/components/footer/footer.html',
		};
	}

	angular.module(moduleName, [])
		.directive(directiveName, footerDirective);
}
