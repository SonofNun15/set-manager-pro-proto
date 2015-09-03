var express = require('express');

var authenticate = require('.authentication');

var loginPage = 1;
var registrationPage = 2;
var indexPage = 3;

exports.viewsPath = '/output/app/debug/views';
exports.appPath = '/output/app/debug';
exports.loginPath = '/output/login/debug';
exports.registrationPath = '/output/registration/debug';
exports.librariesPath = '/output/app/debug/libraries';
exports.assetsPath = '/output/app/debug/assets';

exports.appIndex = '/output/app/debug/index.html';
exports.loginIndex = '/output/login/debug/login.html';
exports.registrationIndex = '/output/registration/debug/registration.html';

exports.config = function(app, directory) {
	app.use('/views', express.static(getResourcePath(exports.views)));
	app.use('/js/app', express.static(getResourcePath(exports.app)));
	app.use('/js/login', express.static(getResourcePath(exports.login)));
	app.use('/js/registration', express.static(getResourcePath(exports.registration)));
	app.use('/libraries', express.static(getResourcePath(exports.libraries)));
	app.use('/assets', express.static(getResourcePath(exports.assets)));

	app.get('/registration', function(request, response) {
		return response.sendFile(getResourcePath(exports.registrationIndex));
	});

	app.get('/app*', function (request, response) {
		authenticate(request, function (authenticateResponse) {
			switch (authenticateResponse) {
				case indexPage:
					response.sendFile(getResourcePath(exports.appIndex));
					break;
				case loginPage:
					response.sendFile(getResourcePath(exports.loginIndex));
					break;
				case registrationPage:
					response.sendFile(getResourcePath(exports.registrationIndex));
					break;
			}
		});
	});

	app.get('/', function(request, response) {
		return response.redirect('/app/');
	});

	function getResourcePath(path) {
		return directory + path;
	}
}
