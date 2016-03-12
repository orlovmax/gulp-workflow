// Streaming concat middleware for gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat');


// Concatenate & Minify JS
gulp.task('concat:main', function() {
	return gulp.src([paths.dev.js + '/main/*.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:head', function() {
	return gulp.src([paths.dev.js + '/head/*.js'])
		.pipe(plumber())
		.pipe(concat('head.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:ie', function() {
	return gulp.src([paths.dev.js + '/ie/*.js'])
		.pipe(plumber())
		.pipe(concat('ie.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:vendor', function() {
	return gulp.src([paths.dev.js + '/vendor/*.js'])
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(paths.build.js));
});

// Concatenate & Minify JS within watch task
gulp.task('concat:main:changed', function() {
	return gulp.src([paths.dev.js + '/main/*.js'])
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:head:changed', function() {
	return gulp.src([paths.dev.js + '/head/*.js'])
		.pipe(plumber())
		.pipe(concat('head.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:ie:changed', function() {
	return gulp.src([paths.dev.js + '/ie/*.js'])
		.pipe(plumber())
		.pipe(concat('ie.js'))
		.pipe(gulp.dest(paths.build.js));
});

gulp.task('concat:vendor:changed', function() {
	return gulp.src([paths.dev.js + '/vendor/*.js'])
		.pipe(plumber())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest(paths.build.js));
});
