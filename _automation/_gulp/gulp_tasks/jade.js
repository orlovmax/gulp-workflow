// Compile Jade templates with gulp build tool
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	changed = require('gulp-changed'),
	data = require('gulp-data'),
	fs = require('fs'),
	jade = require('gulp-jade');


//Compile *.jade files
gulp.task('jade:main', function() {
	return gulp.src(paths.dev.jade + '/pages/*.jade')
		.pipe(plumber())
		.pipe(data(function(file) {
			return { 'config': JSON.parse(fs.readFileSync(paths.dev.data + '/config.json'))}
		}))
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.build.html));
});

//Compile *.jade files within watch task
gulp.task('jade:main:changed', function() {
	return gulp.src(paths.dev.jade + '/pages/*.jade')
		.pipe(plumber())
		.pipe(changed(paths.build.html, {extension: '.html'}))
		.pipe(data(function(file) {
			return { 'config': JSON.parse(fs.readFileSync(paths.dev.data + '/config.json'))}
		}))
		.pipe(jade({
			client: false,
			pretty: true
		}).on('error', function(err) {
			console.log(err);
		}))
		.pipe(gulp.dest(paths.build.html));
});
