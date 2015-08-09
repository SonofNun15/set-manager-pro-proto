var libraries = require('./libReferences.json');
var defaultKarma = require('gulp-utilities').karma;

var locations = require('./locations.json');

module.exports = function(karma) {
	config = defaultKarma(karma, libraries, locations.login);

	config.plugins = [
		'karma-mocha',
		'karma-chai',
		'karma-sinon',
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-ie-launcher',
	];

	karma.set(config)
};