/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />
/// <reference path='../../../../typings/angular-ui-router/angular-ui-router.d.ts' />

module sm.views.projectList 
{
	interface IProject 
	{
		name: string;
		description: string;
		userId: string;
	}

	class ProjectListController 
	{
		userId: string;
		projectList: AngularFireArray;
		state: any;
		mdDialog: any;
		scope: any;

		static $inject: string[] = ['$firebaseArray', '$state', '$mdDialog', '$scope'];
		constructor(private firebaseArray: AngularFireArrayService, state: any, mdDialog: any, scope: any) 
		{
			this.state = state;
			this.mdDialog = mdDialog;
			this.scope = scope;
			var ref: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com');
			var projectsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/projects');

			var authData: FirebaseAuthData = ref.getAuth();
			this.userId = authData.uid;
			console.log('uid = ' + this.userId);

			// create a query for the projects owned by the current user
			var query: any = projectsRef.orderByChild('userId').equalTo(this.userId);
			// the firebaseArray service properly handles database queries as well
			this.projectList = firebaseArray(query);
			// this.projectList = firebaseArray(projectsRef);
		}

		showProject(project: IProject): void 
		{
			console.log('Project Name = ' + project.name);
		}

		createProject(newProject: IProject): void 
		{
			var userRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId);
			userRef.once('value', (userRefSnap: FirebaseDataSnapshot): void => {
				if (userRefSnap.val() != null) 
				{
					newProject.userId = this.userId;
					this.projectList.$add(newProject).then((ref: Firebase): void => {
						var id: string = ref.key();
						console.log('added project with id ' + id);
						// var userProjectsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId + '/projects');
						// var userProjectList: AngularFireArray = this.firebaseArray(userProjectsRef);
						// userProjectList.$add({projectId: id});
					});
				}
			});
		}

		createNewProject(ev: any): void {
			this.mdDialog.show({
				controller: DialogController,
				templateUrl: '/views/project/projectEditor.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then((answer) =>
			{
				if (answer != null)
				{
					this.createProject(answer);
				}
			}, null );
		};

		deleteProject(project: IProject): void 
		{
			var projectId: string = this.projectList.$keyAt(project);
			// delete the project;
			this.projectList.$remove(project).then ((): void => 
			{
				var shotListRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/shotList');
				var shotList: AngularFireArray = this.firebaseArray(shotListRef);

				// get the shotList for the current project
				var query: any = shotListRef.orderByChild('projectId').equalTo(projectId);
				var projectShotList: AngularFireArray = this.firebaseArray(query);
				projectShotList.$loaded().then ((): void => 
				{
					// delete the shots for the current project
					projectShotList.forEach((shot: AngularFireSimpleObject, index: number, array: AngularFireSimpleObject[]) => {
						var record: AngularFireSimpleObject = shotList.$getRecord(shot.$id);
						shotList.$remove(record);
					});
				});
			});

		}

		editProject(project: IProject): void 
		{
			this.projectList.$save(project);
		}

		openProject(project: IProject): void 
		{
			var projectId: string = this.projectList.$keyAt(project);
			this.state.go('project.dashboard', { projectId: projectId });
		}
	}
	
	function DialogController($scope, $mdDialog) 
	{
		$scope.hide = function() 
		{
			$mdDialog.hide();
		};
		$scope.cancel = function() 
		{
			$mdDialog.cancel();
		};
		$scope.answer = function(answer) 
		{
			$mdDialog.hide(answer);
		};
	}
	
	function projectList(): ng.IDirective 
	{
		'use strict';
		var directive: ng.IDirective;
		directive = 
		{
			restrict: 'E',
			templateUrl: '/views/projectList/projectList.html',
			controller: 'ProjectListController',
			controllerAs: 'controller',
		};
		return directive;
	}

	angular.module('sm.views.projectList', ['firebase'])
		.directive('smProjectList', projectList)
		.controller('ProjectListController', ProjectListController);
}
