/// <reference path='../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../typings/angularfire/angularfire.d.ts' />
var sm;
(function (sm) {
    var views;
    (function (views) {
        var shotList;
        (function (shotList_1) {
            var mockShotList = [
                {
                    scene: 'Final Battle',
                    storyDay: '22',
                    timeToShoot: '30min',
                    shotDuration: '4 sec',
                },
                {
                    scene: 'First Scene',
                    storyDay: '22',
                    timeToShoot: '30min',
                    shotDuration: '2 sec',
                },
            ];
            var ShotListController = (function () {
                function ShotListController(firebaseArray) {
                    var shotsRef = new Firebase("https://flickering-torch-2606.firebaseio.com/Shots");
                    this.shotList = firebaseArray(shotsRef);
                }
                ShotListController.prototype.showShot = function (shot) {
                    console.log('scene: ' + shot.scene);
                    console.log('storyDay: ' + shot.storyDay);
                    console.log('timeToShoot: ' + shot.timeToShoot);
                    console.log('shotDuration: ' + shot.shotDuration);
                };
                ShotListController.prototype.createShot = function () {
                    this.shotList.$add(this.newShot);
                    this.newShot = null;
                };
                ShotListController.prototype.deleteShot = function (shot) {
                    this.shotList.$remove(shot);
                };
                ShotListController.prototype.editShot = function (shot) {
                    this.shotList.$save(shot);
                };
                ShotListController.$inject = ['$firebaseArray'];
                return ShotListController;
            })();
            function shotList() {
                'use strict';
                return {
                    restrict: 'E',
                    templateUrl: 'views/shotList/shotList.html',
                    controller: 'ShotListController',
                    controllerAs: 'controller',
                };
            }
            angular.module('sm.views.shotList', ['firebase'])
                .directive('smShotList', shotList)
                .controller('ShotListController', ShotListController);
        })(shotList = views.shotList || (views.shotList = {}));
    })(views = sm.views || (sm.views = {}));
})(sm || (sm = {}));
//# sourceMappingURL=shotList.js.map