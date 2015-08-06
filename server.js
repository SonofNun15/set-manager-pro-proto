var express = require('express');

//Lets define a port we want to listen to
//const
var PORT = 8080;

var app = express();

var serverDirectory = __dirname;

console.log(serverDirectory);

app.use('/views', express.static(serverDirectory + '/output/debug/views'));
app.use('/sources', express.static(serverDirectory + '/output/debug'));
app.use('/libraries', express.static(serverDirectory + '/output/debug/libraries'));
app.use('/assets', express.static(serverDirectory + '/output/debug/assets'));

app.get('/app/*', function (request, response) {
	return response.sendFile(serverDirectory + '/output/debug/index.html');
});

app.get('/', function(request, response) {
	return response.redirect('/app/');
});

var server = app.listen(PORT, function() {
	console.log('Listening on port ' + PORT + '...');
});
