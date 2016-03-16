// Coffeescript plugin for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	coffee = require('gulp-coffee');


//Compile main *.coffee files
gulp.task('coffee:main', function() {
	return gulp.src([paths.dev.coffee + '/main/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/main'));
});

//Compile head *.coffee files
gulp.task('coffee:head', function() {
	return gulp.src([paths.dev.coffee + '/head/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/head'));
});

//Compile vendor *.coffee files
gulp.task('coffee:vendor', function() {
	return gulp.src([paths.dev.coffee + '/vendor/*.coffee'])
		.pipe(plumber())
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/vendor'));
});

//Compile main *.coffee files within watch task
gulp.task('coffee:main:changed', function() {
	return gulp.src([paths.dev.coffee + '/main/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/main'));
});

//Compile head *.coffee files within watch task
gulp.task('coffee:head:changed', function() {
	return gulp.src([paths.dev.coffee + '/head/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/head'));
});

//Compile vendor *.coffee files within watch task
gulp.task('coffee:vendor:changed', function() {
	return gulp.src([paths.dev.coffee + '/vendor/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/vendor'));
});
