// Compress files and folders
module.exports = {
	build: {
		options: {
		  archive: '<%= zip.build %>'
		},
		expand: true,
		cwd: '<%= build.main %>',
		src: ['**/*', '.htaccess']
	}
}
