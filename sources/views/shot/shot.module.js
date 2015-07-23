/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='./shotEditor.ts' />
/// <reference path='./shotView.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        var shot;
        (function (shot) {
            angular.module('sm.views.shot', [])
                .directive('smShotEditor', sm.views.shotEditor.shotEditor)
                .directive('smShotView', sm.views.shotView.shotView);
        })(shot = views.shot || (views.shot = {}));
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
//# sourceMappingURL=shot.module.js.map