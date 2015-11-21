// Clear files and folders
module.exports = {
	gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
	dev: ['<%= build.js %>/live.js'],
	build: ['<%= build.js %>/**/*.min.*',
			'<%= build.css %>/**/*.min.*',
			'<%= build.main %>/**/*.*.{png,jpg,gif,svg,ico}']
}
