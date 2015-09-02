/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />

module sm.views.projectList {
	interface IProject {
		name: string;
		description: string;
		userId: string;
	}

	class ProjectListController {
		userId: string;
		projectList: AngularFireArray;
		newProject: IProject;

		static $inject: string[] = ['$firebaseArray'];
		constructor(private firebaseArray: AngularFireArrayService) {
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

		showProject(project: IProject): void {
			console.log('Project Name = ' + project.name);
		}

		createProject(): void {
			var userRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId);
			userRef.once('value', (userRefSnap: FirebaseDataSnapshot): void => {
				if (userRefSnap.val() != null) {
					this.newProject.userId = this.userId;
					this.projectList.$add(this.newProject).then((ref: Firebase): void => {
						var id: string = ref.key();
						console.log('added project with id ' + id);
						// var userProjectsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId + '/projects');
						// var userProjectList: AngularFireArray = this.firebaseArray(userProjectsRef);
						// userProjectList.$add({projectId: id});
						this.newProject = null;
					});
				}
			});
		}

		deleteProject(project: IProject): void {
			this.projectList.$remove(project);
		}

		editProject(project: IProject): void {
			this.projectList.$save(project);
		}
	}

	function projectList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/projectList/projectList.html',
			controller: 'ProjectListController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.projectList', ['firebase'])
		.directive('smProjectList', projectList)
		.controller('ProjectListController', ProjectListController);
}
