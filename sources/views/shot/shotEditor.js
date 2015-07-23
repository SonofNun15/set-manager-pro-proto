/// <reference path='../../../typings/angularjs/angular.d.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        var shotEditor;
        (function (shotEditor_1) {
            function shotEditor() {
                'use strict';
                return {
                    restrict: 'E',
                    templateUrl: 'views/shot/shotEditor.html',
                    scope: {
                        shot: '='
                    }
                };
            }
            shotEditor_1.shotEditor = shotEditor;
        })(shotEditor = views.shotEditor || (views.shotEditor = {}));
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
//# sourceMappingURL=shotEditor.js.map