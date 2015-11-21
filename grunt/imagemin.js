//Minify images
module.exports = {
	main: {
		options: {
			optimizationLevel: 7
		},
		files: [{
			expand: true,
			cwd: '<%= dev.images %>',
			src: ['**/*.{png,jpg,gif,svg}'],
			dest: '<%= dev.images %>'
		}]
	}
}
