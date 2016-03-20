module.exports = {
	// Install bower dependencies and place them to dev folders
	'start': [
		'shell:bower',
		'bower',
		'clean:gitkeep'
	],

	// Dev task with static server
	'dev': [
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
		'browserSync:dev',
		'watch:all'
	],

	// Build task
	'build': [
		'imagemin',
		'csscomb',
		'uglify',
		'csso',
		'htmlmin',
		'browserSync:test'
	],

	// Regenerate and build project by running all tasks
	'rebuild': [
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
		'csscomb',
		'uglify',
		'csso',
		'htmlmin'
	],

	// Run server without watching for changes
	'server': [
		'browserSync:test'
	]
};
