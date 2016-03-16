// Clear files and folders
module.exports = {
	gitkeep: ['<%= paths.dev.main %>/**/.gitkeep', '<%= paths.build.main %>/**/.gitkeep'],
	dev: [
		'<%= paths.build.js %>/*.js',
		'!<%= paths.build.js %>/*.min.*',
		'<%= paths.build.css %>/*.css',
		'!<%= paths.build.css %>/*.min.*'
	],
	cache: [
		'<%= paths.build.js %>/*.min.*.js',
		'<%= paths.build.css %>/*.min.*.css',
		'<%= paths.build.fonts %>/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		'<%= paths.build.main %>/**/*.*.{png,jpg,gif,svg,ico}'
	]
}
