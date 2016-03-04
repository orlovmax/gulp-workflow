// Copy assets
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;


// Copy some helpers and devtools.
// Credits to @jbdemonte https://github.com/gulpjs/gulp/issues/151
gulp.task('sync:php', function() {
	return gulp.src([paths.dev.php + '/**/*.*'], {base: paths.dev.php})
		.pipe(gulp.dest(paths.build.php));
});

gulp.task('sync:fonts', function() {
	return gulp.src([paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}'], {base: paths.dev.fonts})
		.pipe(gulp.dest(paths.build.fonts));
});

gulp.task('sync:helpers', function() {
	return gulp.src([
		paths.dev.helpers + '/**/',
		paths.dev.helpers + '/.htaccess'
	], {base: paths.dev.helpers})
		.pipe(gulp.dest(paths.build.main));
});

gulp.task('sync:images', function() {
	return gulp.src([paths.dev.images + '/**/*.*'], {base: paths.dev.images})
		.pipe(gulp.dest(paths.build.images));
});


// Copy some helpers and devtools within watch task
gulp.task('sync:php:server', function() {
	return gulp.src([paths.dev.php + '/**/*.*'], {base: paths.dev.php})
		.pipe(gulp.dest(paths.build.php))
		.pipe(reload({ stream:true }));
});

gulp.task('sync:fonts:server', function() {
	return gulp.src([paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}'], {base: paths.dev.fonts})
		.pipe(gulp.dest(paths.build.fonts))
		.pipe(reload({ stream:true }));
});

gulp.task('sync:helpers:server', function() {
	gulp.src([
		paths.dev.helpers + '/**/',
		paths.dev.helpers + '/.htaccess'
	], {base: paths.dev.helpers})
		.pipe(gulp.dest(paths.build.main))
		.pipe(reload({ stream:true }));
});

gulp.task('sync:images:server', function() {
	return gulp.src([paths.dev.images + '/**/*.*'], {base: paths.dev.images})
		.pipe(gulp.dest(paths.build.images))
		.pipe(reload({ stream:true }));
});
