module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'shell:bower',
		'bower:ie',
		'bower:vendor',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:php',
		'sync:images',
		'browserSync:dev',
		'watch:dev'
	],

	// Build task
	'build': [
		'imagemin',
		'csscomb',
		'uglify',
		'csso',
		'processhtml',
		'htmlmin',
		'clean:dev',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		'coffee:main',
		'coffee:head',
		'coffee:vendor',
		'concat:main',
		'concat:head',
		'concat:ie',
		'concat:vendor',
		'sass',
		'stylus',
		'autoprefixer',
		'cmq',
		'jade',
		'sync:helpers',
		'sync:fonts',
		'sync:php',
		'sync:images',
		'imagemin',
		'csscomb',
		'uglify',
		'csso',
		'processhtml',
		'htmlmin',
		'clean:dev'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
