/// <reference path='../../../typings/angularjs/angular.d.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        var shotView;
        (function (shotView_1) {
            function shotView() {
                'use strict';
                return {
                    restrict: 'E',
                    templateUrl: 'views/shot/shotView.html',
                    scope: {
                        shot: '=',
                        deleteShot: '&',
                    }
                };
            }
            shotView_1.shotView = shotView;
        })(shotView = views.shotView || (views.shotView = {}));
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
//# sourceMappingURL=shotView.js.map