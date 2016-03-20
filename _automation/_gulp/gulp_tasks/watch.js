// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('./config/paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch:all', function() {
	gulp.watch(
		paths.dev.coffee + '/*.coffee',
		function() {
			runSequence(
				'coffee:changed',
				'rigger',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.js + '/*.js',
			paths.dev.js + '/lib/*.js'
		],
		function() {
			runSequence(
			'rigger',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.sass + '/*.{sass,scss}',
		function() {
			runSequence(
			'sass:changed',
			'autoprefixer',
			'cmq',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.stylus + '/*.styl',
		function() {
			runSequence(
			'stylus:changed',
			'cmq',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.jade + '/*.jade',
		function() {
			runSequence(
			'jade:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.images + '/**/*.*',
		function() {
			runSequence(
			'sync:images:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}',
		function() {
			runSequence(
			'sync:fonts:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		[
			paths.dev.helpers + '/**/*.*',
			paths.dev.helpers + '/.htaccess'
		],
		function() {
			runSequence(
				'sync:helpers:changed',
				'browserSync:reload'
			);
		}
	);
});
