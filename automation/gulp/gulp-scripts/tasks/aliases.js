// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('start', function() {
	runSequence(
		'shell:bower',
		'bower:ie',
		'bower:vendor',
		'clean:gitkeep'
	);
});

// Dev task with static server
gulp.task('dev', function() {
	runSequence(
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:php',
		'sync:images',
		'browserSync:server',
		'watch:dev'
	);
});

// Build task
gulp.task('build', function() {
	runSequence(
		'imagemin',
		'processhtml',
		'autoprefixer',
		'csscomb',
		'uglify',
		'csso',
		'htmlmin',
		'clean:dev',
		'browserSync:server'
	);
});

// Regenerate and build project by running all tasks
gulp.task('rebuild', function() {
	runSequence(
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:php',
		'sync:images',
		'imagemin',
		'processhtml',
		'autoprefixer',
		'csscomb',
		'uglify',
		'csso',
		'htmlmin'
	);
});

// Run server without watching for changes
gulp.task('server', ['browserSync:server']);
