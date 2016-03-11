// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('../paths'),
	runSequence = require('run-sequence');


// Watch Files For Changes
gulp.task('watch:dev', function() {
	gulp.watch(
		paths.dev.coffee + '/main/*.coffee',
		function() {
			runSequence(
				'coffee:main:changed',
				'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.coffee + '/head/*.coffee',
		function() {
			runSequence(
			'coffee:head:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.coffee + '/vendor/*.coffee',
		function() {
			runSequence(
			'coffee:vendor:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.js + '/main/*.js',
		function() {
			runSequence(
			'concat:main:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.js + '/head/*.js',
		function() {
			runSequence(
			'concat:head:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.js + '/ie/*.js',
		function() {
			runSequence(
			'concat:ie:changed',
			'browserSync:reload'
			);
		}
	);

	gulp.watch(
		paths.dev.js + '/vendor/*.js',
		function() {
			runSequence(
			'concat:vendor:changed',
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
