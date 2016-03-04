// SASS plugin for gulp
var gulp = require('gulp'),
	paths = require('../paths'),
	changed = require('gulp-changed'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;

//Compile *.scss files
gulp.task('sass', function () {
	return gulp.src(paths.dev.sass + '/*.{sass,scss}')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest(paths.build.css));
});

//Compile *.scss files within watch task
gulp.task('sass:server', function () {
	return gulp.src(paths.dev.sass + '/*.{sass,scss}')
		.pipe(changed(paths.build.css, {extension: '.css'}))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest(paths.build.css))
		.pipe(reload({ stream:true }));
});
