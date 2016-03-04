// Delete files/folders using globs
var gulp = require('gulp'),
	paths = require('../paths'),
		del = require('del'),
		vinylPaths = require('vinyl-paths');


gulp.task('clean:gitkeep', function() {
	return gulp.src([paths.dev.main + '/**/.gitkeep', paths.build.main + '/**/.gitkeep'], { read: false })
		.pipe(vinylPaths(del));
});

gulp.task('clean:dev', function() {
	return gulp.src([
		paths.build.js + '/*.js',
		'!' + paths.build.js + '/*.min.*',
		paths.build.css + '/*.css',
		'!' + paths.build.css + '/*.min.*'
	], { read: false })
		.pipe(vinylPaths(del));
});

gulp.task('clean:cache', function() {
	return gulp.src([
		paths.build.js + '/**/*.min.*.js',
		paths.build.css + '/**/*.min.*.css',
		paths.build.fonts + '/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		paths.build.main + '/**/*.*.{png,jpg,gif,svg,ico}'
	], { read: false })
		.pipe(vinylPaths(del));
});
