// A Gulp plugin that minifies css with clean-css
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css');


//Minify *.css files
gulp.task('csso', function () {
	return gulp.src([
		paths.build.css + '/*.css',
		'!' + paths.build.css + '/*.min.css'
	])
		.pipe(plumber())
		.pipe(minifyCSS({
			advanced: false,
			aggressiveMerging: false,
			restructuring:false,
			compatibility: 'ie7'
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.css));
});
