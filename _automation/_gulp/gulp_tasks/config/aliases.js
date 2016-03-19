// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('start', function() {
	runSequence(
		'shell:bower',
		'bower',
		'clean:gitkeep'
	);
});

// Dev task with static server
gulp.task('dev', function() {
	runSequence(
		'coffee',
		'rigger',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'browserSync:server',
		'watch:all'
	);
});

// Build task
gulp.task('build', function() {
	runSequence(
		'imagemin',
		'processhtml',
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
		'coffee',
		'rigger',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'imagemin',
		'processhtml',
		'csscomb',
		'uglify',
		'csso',
		'htmlmin'
	);
});

// Run server without watching for changes
gulp.task('server', ['browserSync:server']);
