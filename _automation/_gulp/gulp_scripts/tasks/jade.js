// Compile Jade templates with gulp build tool
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	jade = require('gulp-jade');


//Compile *.jade files
gulp.task('jade', function() {
	return gulp.src(paths.dev.jade + '/*.jade')
		.pipe(plumber())
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.build.html));
});

//Compile *.jade files within watch task
gulp.task('jade:changed', function() {
	return gulp.src(paths.dev.jade + '/*.jade')
		.pipe(plumber())
		.pipe(changed(paths.build.html, {extension: '.html'}))
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.build.html));
});
