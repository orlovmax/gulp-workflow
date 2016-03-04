// Static server for theme dev
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync').create();

// Static server
gulp.task('browserSync', function() {
	browserSync.init({
		files: [
			paths.build.js + '/*.js',
			paths.build.css + '/*.css',
			paths.build.images + '/**/*.*',
			paths.build.html + '/*.html'
		],
		server: paths.build.main
	});
});
