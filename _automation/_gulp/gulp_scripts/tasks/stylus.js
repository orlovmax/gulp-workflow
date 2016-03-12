// Compile Stylus with gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	stylus = require('gulp-stylus');


//Compile *.scss files
gulp.task('stylus', function () {
	return gulp.src(paths.dev.stylus + '/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest(paths.build.css));
});

//Compile *.scss files within watch task
gulp.task('stylus:changed', function () {
	return gulp.src(paths.dev.stylus + '/*.styl')
		.pipe(plumber())
		.pipe(changed(paths.build.css, {extension: '.css'}))
		.pipe(stylus())
		.pipe(gulp.dest(paths.build.css));
});
