/// <reference path='../../typings/angularjs/angular.d.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        angular.module('sm.views', ['sm.views.shotList', 'sm.views.shot', 'sm.views.schedule', 'sm.views.adshot']);
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
