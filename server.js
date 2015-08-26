var express = require('express');
var _ = require('lodash');
var Firebase = require('firebase');

//Lets define a port we want to listen to
//const
var PORT = 8080;

var app = express();

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
	authenticate(request, function (authenticated) {
		if (authenticated) {
			response.sendFile(serverDirectory + '/output/app/debug/index.html');
		} else {
			response.sendFile(serverDirectory + '/output/login/debug/login.html');
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
					callback(false);
				} else {
					findUser(authData.uid, callback)
				}
			});
		} catch (err) {
			callback(false);
		}
	} else {
		callback(false);
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
					callback(false);
				} else {
					var newUser = newUserRefSnap.val();
					console.log('new user found');
					var usersRef = new Firebase('https://flickering-torch-2606.firebaseio.com/users');
					usersRef.child(uid).set({
						name: newUser.name,
						email: newUser.email
					});
					newUserRef.remove();

					callback(true);
				}
			});
		}
		else {
			console.log('user found');
			callback(true);
		}
	});
}