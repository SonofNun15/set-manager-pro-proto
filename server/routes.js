var express = require('express');

var authentication = require('./authentication');


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
	app.use('/views', express.static(getResourcePath(exports.viewsPath)));
	app.use('/js/app', express.static(getResourcePath(exports.appPath)));
	app.use('/js/login', express.static(getResourcePath(exports.loginPath)));
	app.use('/js/registration', express.static(getResourcePath(exports.registrationPath)));
	app.use('/libraries', express.static(getResourcePath(exports.librariesPath)));
	app.use('/assets', express.static(getResourcePath(exports.assetsPath)));

	app.get('/registration', function(request, response) {
		return response.sendFile(getResourcePath(exports.registrationIndex));
	});

	app.get('/app*', function (request, response) {
		authentication.authenticate(request, function (authenticateResponse) {
			switch (authenticateResponse) {
				case authentication.indexPage:
					response.sendFile(getResourcePath(exports.appIndex));
					break;
				case authentication.loginPage:
					response.sendFile(getResourcePath(exports.loginIndex));
					break;
				case authentication.registrationPage:
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
