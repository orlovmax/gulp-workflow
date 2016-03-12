// Minify JavaScript with UglifyJS2
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');


gulp.task('uglify', function() {
	return gulp.src([
		paths.build.js + '/*.js',
		'!' + paths.build.js + '/*.min.js'
	])
		.pipe(plumber())
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.js));
});
