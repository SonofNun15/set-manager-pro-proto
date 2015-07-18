/// <reference path='../../../typings/angularjs/angular.d.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        var shotList;
        (function (shotList_1) {
            function shotList() {
                'use strict';
                return {
                    restrict: 'E',
                    templateUrl: 'views/shotList/shotList.html',
                };
            }
            angular.module('sm.views.shotList', [])
                .directive('smShotList', shotList);
        })(shotList = views.shotList || (views.shotList = {}));
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
//# sourceMappingURL=shotList.js.map