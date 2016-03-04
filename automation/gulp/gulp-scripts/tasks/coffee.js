// Coffeescript plugin for gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	coffee = require('gulp-coffee'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


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
gulp.task('coffee:main:server', function() {
	return gulp.src([paths.dev.coffee + '/main/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/main'))
		.pipe(reload({ stream:true }));
});

//Compile head *.coffee files within watch task
gulp.task('coffee:head:server', function() {
	return gulp.src([paths.dev.coffee + '/head/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/head'))
		.pipe(reload({ stream:true }));
});

//Compile vendor *.coffee files within watch task
gulp.task('coffee:vendor:server', function() {
	return gulp.src([paths.dev.coffee + '/vendor/*.coffee'])
		.pipe(plumber())
		.pipe(changed(paths.dev.js, {extension: '.js'}))
		.pipe(coffee({bare: true}))
		.pipe(gulp.dest(paths.dev.js + '/vendor'))
		.pipe(reload({ stream:true }));
});
