// Format CSS coding style with CSScomb
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	csscomb = require('gulp-csscomb');


//Autoprefixer
gulp.task('csscomb', function () {
	return gulp.src([
		paths.build.css + '/*.css',
		'!' + paths.build.css + '/*.min.css'
	])
		.pipe(plumber())
		.pipe(csscomb())
		.pipe(gulp.dest(paths.build.css));
});