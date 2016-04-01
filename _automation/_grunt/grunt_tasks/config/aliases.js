module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'shell:bower',
		'bower:main',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
		'coffee:main',
		'rigger:main',
		'sass:main',
		'stylus:main',
		'autoprefixer:main',
		'cmq:main',
		'async_jade_data:main',
		'jade:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'browserSync:dev',
		'watch'
	],

	// Build task
	'build': [
		'imagemin:main',
		'csscomb:main',
		'uglify:main',
		'csso:main',
		'htmlmin:main',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
		'coffee:main',
		'rigger:main',
		'sass:main',
		'stylus:main',
		'autoprefixer:main',
		'cmq:main',
		'async_jade_data:main',
		'jade:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'imagemin:main',
		'csscomb:main',
		'uglify:main',
		'csso:main',
		'htmlmin:main'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
