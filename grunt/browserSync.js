// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	dev:{
		bsFiles: {
			src: '<%= server.files %>/**/*'
		},
		options: {
			watchTask: true,
			server: {
				baseDir: '<%= server.main %>'
			}
		}
	},
	build:{
		bsFiles: {
			src: '<%= server.files %>/**/*'
		},
		options: {
			server: {
				baseDir: '<%= server.main %>'
			}
		}
	}
}
