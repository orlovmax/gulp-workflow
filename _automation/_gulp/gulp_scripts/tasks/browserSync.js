// Static server for theme dev
var gulp = require('gulp'),
	paths = require('../paths'),
	browserSync = require('browser-sync');

// Static server
gulp.task('browserSync:server', function() {
	browserSync({
		server: paths.build.main
	});
});

gulp.task('browserSync:reload', function() {
	return gulp.src('', {read: false})
		.pipe(browserSync.reload({stream:true}));
});
