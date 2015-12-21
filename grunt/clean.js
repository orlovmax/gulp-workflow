// Clear files and folders
module.exports = {
	gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
	dev: ['<%= build.js %>/*.js',
			'!<%= build.js %>/*.min.*',
			'<%= build.css %>/*.css',
			'!<%= build.css %>/*.min.*'],
	build: ['<%= build.js %>/*.min.*',
			'<%= build.css %>/*.min.*',
			'<%= build.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
