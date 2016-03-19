//Minify images
module.exports = {
	all: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= paths.build.images %>',
			src: ['**/*.*'],
			dest: '<%= paths.build.images %>'
		}]
	}
}
