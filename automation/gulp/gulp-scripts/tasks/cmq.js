// Combine matching media queries into one media query definition
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	mmq = require('gulp-merge-media-queries');


//Combine media queries in result *.css files
gulp.task('cmq', function () {
	return gulp.src([
		paths.build.css + '/*.css',
		'!' + paths.build.css + '/*.min.css'
	])
		.pipe(plumber())
		.pipe(mmq({
			log: false
		}))
		.pipe(gulp.dest(paths.build.css));
});
