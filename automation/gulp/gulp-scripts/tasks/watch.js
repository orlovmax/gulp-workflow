// File watcher that uses super-fast chokidar and emits vinyl objects
var gulp = require('gulp'),
	paths = require('../paths');


// Watch Files For Changes
gulp.task('watch:dev', function() {
	gulp.watch(paths.dev.coffee + '/main/*.coffee', ['coffee:main:server']);
	gulp.watch(paths.dev.coffee + '/head/*.coffee', ['coffee:head:server']);
	gulp.watch(paths.dev.coffee + '/vendor/*.coffee', ['coffee:vendor:server']);
	gulp.watch(paths.dev.js + '/main/*.js', ['concat:main:server']);
	gulp.watch(paths.dev.js + '/head/*.js', ['concat:head:server']);
	gulp.watch(paths.dev.js + '/ie/*.js', ['concat:ie:server']);
	gulp.watch(paths.dev.js + '/vendor/*.js', ['concat:vendor:server']);
	gulp.watch(paths.dev.sass + '/*.{sass,scss}', ['sass:server']);
	gulp.watch(paths.dev.stylus + '/*.styl', ['stylus:server']);
	gulp.watch(paths.dev.jade + '/*.jade', ['jade:server']);
	gulp.watch(paths.dev.php + '/**/*.*', ['sync:php:server']);
	gulp.watch(paths.dev.images + '/**/*.*', ['sync:images:server']);
	gulp.watch(paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}', ['sync:fonts:server']);
	gulp.watch([
		paths.dev.helpers + '/**/*.*',
		paths.dev.helpers + '/.htaccess'
	], ['sync:helpers:server']);
	gulp.watch(paths.build.css + '/*.css', ['mmq']);
});
