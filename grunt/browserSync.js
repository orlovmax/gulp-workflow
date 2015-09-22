// Browser sync task
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
