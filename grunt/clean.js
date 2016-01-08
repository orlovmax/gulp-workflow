// Clear files and folders
module.exports = {
	gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
	dev: ['<%= build.js %>/*.js',
			'!<%= build.js %>/*.min.*',
			'<%= build.css %>/*.css',
			'!<%= build.css %>/*.min.*'],
	cache: ['<%= theme.js %>/*.min.*.js',
			'<%= theme.css %>/*.min.*.css',
			'<%= theme.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
