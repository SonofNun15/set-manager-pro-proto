/// <reference path='../../typings/angularjs/angular.d.ts' />
/// <reference path='../../typings/angular-ui-router/angular-ui-router.d.ts' />
var sm;
(function (sm) {
    var config;
    (function (config) {
        angular.module('sm.config', [])
            .config(routeConfiguration);
        routeConfiguration.$inject = ['$state'];
        function routeConfiguration($state) {
            'use strict';
        }
        routes.$inject = ['$stateProvider'];
        function routes($stateProvider) {
            $stateProvider
                .state('shotList', {
                url: '/shotList',
                templateUrl: 'views/shotList/shotList.html',
            });
        }
    })(config = sm.config || (sm.config = {}));
})(sm || (sm = {}));
//# sourceMappingURL=config.module.js.map