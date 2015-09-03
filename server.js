var express = require('express');
var _ = require('lodash');
var Firebase = require('firebase');

var routes = require('./server/routes');

//Lets define a port we want to listen to
//const
var PORT = 8080;
var serverDirectory = __dirname;

var app = express();

routes.config(app, serverDirectory);

var server = app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});
