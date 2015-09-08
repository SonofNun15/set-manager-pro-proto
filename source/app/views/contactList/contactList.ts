/// <reference path='../../../../typings/angularjs/angular.d.ts' />
/// <reference path='../../../../typings/firebase/firebase.d.ts' />
/// <reference path='../../../../typings/angularfire/angularfire.d.ts' />
/// <reference path='../../../../typings/angular-ui-router/angular-ui-router.d.ts' />

module sm.views.contactList {
	interface IContact {
		firstName: string;
		lastName: string;
		streetAddress: string;
		city: string;
		state: string;
		zipcode: string;
		phone: string;
		email: string
		userId: string;
	}

	class ContactListController {
		userId: string;
		contactList: AngularFireArray;
		newContact: IContact;
		state: any;

		static $inject: string[] = ['$firebaseArray', '$state'];
		constructor(private firebaseArray: AngularFireArrayService, state: any) {
			this.state = state;
			var ref: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com');
			var contactsRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/contacts');

			var authData: FirebaseAuthData = ref.getAuth();
			this.userId = authData.uid;

			// Get the contacts owned by the current user
			var query: any = contactsRef.orderByChild('userId').equalTo(this.userId);
			this.contactList = firebaseArray(query);
		}

		showContact(contact: IContact): void {
			console.log('Contact Name = ' + contact.firstName + ' ' + contact.lastName);
		}

		createContact(): void {
			var userRef: Firebase = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + this.userId);
			userRef.once('value', (userRefSnap: FirebaseDataSnapshot): void => {
				if (userRefSnap.val() != null) {
					this.newContact.userId = this.userId;
					this.contactList.$add(this.newContact).then((ref: Firebase): void => {
						var id: string = ref.key();
						console.log('added contact with id ' + id);
						this.newContact = null;
					});
				}
			});
		}

		deleteContact(contact: IContact): void {
			this.contactList.$remove(contact);
		}

		editContact(contact: IContact): void {
			this.contactList.$save(contact);
		}
	}

	function contactList(): ng.IDirective {
		'use strict';
		return {
			restrict: 'E',
			templateUrl: '/views/contactList/contactList.html',
			controller: 'ContactListController',
			controllerAs: 'controller',
		};
	}

	angular.module('sm.views.contactList', ['firebase'])
		.directive('smContactList', contactList)
		.controller('ContactListController', ContactListController);
}
