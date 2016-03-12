// Prefix CSS with Autoprefixer
var gulp = require('gulp'),
	paths = require('../paths'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');


//Autoprefixer
gulp.task('autoprefixer', function () {
	return gulp.src([
		paths.build.css + '/*.css',
		'!' + paths.build.css + '/*.min.css'
	])
		.pipe(plumber())
		.pipe(autoprefixer({
			browsers: paths.browserlist,
			cascade: true
		}))
		.pipe(gulp.dest(paths.build.css));
});
