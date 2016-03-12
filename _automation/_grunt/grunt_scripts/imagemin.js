//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= build.images %>',
			src: ['**/*.*'],
			dest: '<%= build.images %>'
		}]
	}
}
