var express = require('express');

//Lets define a port we want to listen to
//const
var PORT = 8080;

var app = express();

var serverDirectory = __dirname;

console.log(serverDirectory);

app.use('/views', express.static(serverDirectory + '/output/app/debug/views'));
app.use('/js/app', express.static(serverDirectory + '/output/app/debug'));
app.use('/js/login', express.static(serverDirectory + '/output/login/debug'));
app.use('/libraries', express.static(serverDirectory + '/output/app/debug/libraries'));
app.use('/assets', express.static(serverDirectory + '/output/app/debug/assets'));

app.get('/login/', function(request, response) {
	return response.sendFile(serverDirectory + '/output/login/debug/login.html');
});

app.get('/app/*', function (request, response) {
	return response.sendFile(serverDirectory + '/output/app/debug/index.html');
});

app.get('/', function(request, response) {
	return response.redirect('/app/');
});

var server = app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});
