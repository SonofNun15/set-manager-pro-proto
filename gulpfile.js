var gulp = require('gulp');

var gulpUtilities = require('gulp-utilities');

var locations = require('./locations.json');

// Configure build for main application
gulpUtilities.build.config({
	locations: locations.app,
	taskNames: {
		lint: 'lint.app',
		build: 'build.app',
		clean: 'clean.app',
		compile: 'compile.app',
		copy: 'copy.app',
	},
}, gulp);

// Configure build for login application
gulpUtilities.build.config({
	locations: locations.login,
	taskNames: {
		lint: 'lint.login',
		build: 'build.login',
		clean: 'clean.login',
		compile: 'compile.login',
		copy: 'copy.login',
	},
});

// Configure tests for main application
gulpUtilities.test.config(__dirname + '/karma-app.conf.js', {
	locations: locations.app,
	taskNames: {
		test: {
			base: 'test.app',
			debug: 'debug',
			tc: 'tc',
			all: 'all',
			prep: 'prep',
			clean: 'clean',
			build: 'build',
			copy: 'copy',
		}
	},
}, gulp);

// Configure tests for login application
gulpUtilities.test.config(__dirname + '/karma-login.conf.js', {
	locations: locations.login,
	taskNames: {
		test: {
			base: 'test.login',
			debug: 'debug',
			tc: 'tc',
			all: 'all',
			prep: 'prep',
			clean: 'clean',
			build: 'build',
			copy: 'copy',
		}
	},
}, gulp)

gulp.task('default', ['build']);
gulp.task('build', ['build.app', 'build.login']);

gulp.task('build.app', ['build.app.debug']);
gulp.task('build.login', ['build.login.debug']);