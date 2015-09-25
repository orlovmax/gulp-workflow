// Grunt Task for keeping multiple browsers & devices in sync when building websites
module.exports = {
	bsFiles: {
		src: '<%= server.files %>/**/*'
	},
	options: {
		open: false,
		server: {
			baseDir: '<%= server.main %>'
		}
	}
}
