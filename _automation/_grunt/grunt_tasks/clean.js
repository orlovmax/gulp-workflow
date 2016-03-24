// Clear files and folders
module.exports = {
	gitkeep: ['<%= paths.dev.main %>/**/.gitkeep', '<%= paths.build.main %>/**/.gitkeep'],
	cache: [
		'<%= paths.build.js %>/*.min.*.js',
		'<%= paths.build.css %>/*.min.*.css',
		'<%= paths.build.fonts %>/**/*.*.{eot,svg,ttf,otf,woff,woff2}',
		'<%= paths.build.main %>/**/*.*.{png,jpg,gif,svg,ico}'
	]
}