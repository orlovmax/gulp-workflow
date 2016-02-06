// Clear files and folders
module.exports = {
	gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
	dev: [
		'<%= build.js %>/*.js',
		'!<%= build.js %>/*.min.*',
		'<%= build.css %>/*.css',
		'!<%= build.css %>/*.min.*'
	],
	cache: [
		'<%= build.js %>/*.min.*.js',
		'<%= build.css %>/*.min.*.css',
		'<%= build.fonts %>/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		'<%= build.main %>/**/*.*.{png,jpg,gif,svg,ico}'
	]
}
