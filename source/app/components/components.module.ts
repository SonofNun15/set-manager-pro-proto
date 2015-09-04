/// <reference path='../../../typings/angularjs/angular.d.ts' />

/// <reference path='header/header.ts' />
/// <reference path='footer/footer.ts' />

module sm.components {
	export var moduleName: string = 'sm.components';

	angular.module(moduleName, [
		header.moduleName,
		footer.moduleName,
	]);
}
