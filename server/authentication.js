var _ = require('lodash');
var Firebase = require('firebase');

exports.loginPage = 1;
exports.registrationPage = 2;
exports.indexPage = 3;

exports.authenticate = function(request, callback) {
	if (!_.isUndefined(request.query.token)) {
		var ref = new Firebase('https://flickering-torch-2606.firebaseio.com');

		try
		{
			ref.authWithCustomToken(request.query.token, function(error, authData) {
				if (error) {
					callback(exports.loginPage);
				} else {
					findUser(authData.uid, callback)
				}
			});
		} catch (err) {
			callback(exports.loginPage);
		}
	} else {
		callback(exports.loginPage);
	}
};

function findUser(uid, callback) {
	console.log('findUser');
	var userRef = new Firebase('https://flickering-torch-2606.firebaseio.com/users/' + uid);
	console.log('userRef = ' + userRef)

	userRef.once('value', function(userRefSnap) {
		if (userRefSnap.val() == null) {
			console.log('new user');
			var newUserGUID = '12345';
			var newUserRef = new Firebase('https://flickering-torch-2606.firebaseio.com/newUsers/' + newUserGUID);
			newUserRef.once('value', function(newUserRefSnap) {
				if (newUserRefSnap.val() == null) {
					console.log('new user not found');
					callback(exports.registrationPage);
				} else {
					var newUser = newUserRefSnap.val();
					console.log('new user found');
					var usersRef = new Firebase('https://flickering-torch-2606.firebaseio.com/users');
					usersRef.child(uid).set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						phone: newUser.phone,
						email: newUser.email,
						referral: newUser.referral,
						bio: newUser.bio
					});
					newUserRef.remove();

					callback(exports.indexPage);
				}
			});
		}
		else {
			console.log('user found');
			callback(exports.indexPage);
		}
	});
}
