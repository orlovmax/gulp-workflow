// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	test:{
		options: {
			server: {
				baseDir: '<%= build.main %>'
			}
		}
	},
	dev:{
		bsFiles: {
			src: [
				'<%= build.js %>/*.js',
				'<%= build.css %>/*.css',
				'<%= build.php %>/**/*.php',
				'<%= build.images %>/**/*.*',
				'<%= build.html %>/*.html'
			]
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= build.main %>'
			}
		}
	}
}
