// Compile Sass to CSS
module.exports = {
	main: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: ['**/*.{sass,scss}', '!components/**/*.*', '!helpers/**/*.*'],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
