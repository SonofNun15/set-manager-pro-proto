var express = require('express');
var _ = require('lodash');
var Firebase = require('firebase');

//Lets define a port we want to listen to
//const
var PORT = 8080;

var app = express();

var loginPage = 1;
var registrationPage = 2;
var indexPage = 3;
var serverDirectory = __dirname;

console.log(serverDirectory);

app.use('/views', express.static(serverDirectory + '/output/app/debug/views'));
app.use('/js/app', express.static(serverDirectory + '/output/app/debug'));
app.use('/js/login', express.static(serverDirectory + '/output/login/debug'));
app.use('/js/registration', express.static(serverDirectory + '/output/registration/debug'));
app.use('/libraries', express.static(serverDirectory + '/output/app/debug/libraries'));
app.use('/assets', express.static(serverDirectory + '/output/app/debug/assets'));

app.get('/registration', function(request, response) {
	return response.sendFile(serverDirectory + '/output/registration/debug/registration.html');
});

app.get('/app*', function (request, response) {
	authenticate(request, function (authenticateResponse) {
		switch (authenticateResponse) {
			case indexPage:
				response.sendFile(serverDirectory + '/output/app/debug/index.html');
				break;
			case loginPage:
				response.sendFile(serverDirectory + '/output/login/debug/login.html');
				break;
			case registrationPage:
				response.sendFile(serverDirectory + '/output/registration/debug/registration.html');
				break;
		}
	});
});

app.get('/', function(request, response) {
	return response.redirect('/app/');
});

var server = app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});

function authenticate(request, callback) {
	if (!_.isUndefined(request.query.token)) {
		var ref = new Firebase('https://flickering-torch-2606.firebaseio.com');

		try
		{
			ref.authWithCustomToken(request.query.token, function(error, authData) {
				if (error) {
					callback(loginPage);
				} else {
					findUser(authData.uid, callback)
				}
			});
		} catch (err) {
			callback(loginPage);
		}
	} else {
		callback(loginPage);
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
					callback(registrationPage);
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

					callback(indexPage);
				}
			});
		}
		else {
			console.log('user found');
			callback(indexPage);
		}
	});
}