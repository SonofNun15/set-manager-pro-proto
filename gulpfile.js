var gulp = require('gulp');

var gulpUtilities = require('gulp-utilities');

var locations = require('./locations.json');

gulpUtilities.build.config(gulp, locations);
gulpUtilities.test.config(gulp, __dirname + '/karma.conf.js', locations);

gulp.task('default', ['build']);
