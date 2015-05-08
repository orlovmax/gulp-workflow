//Compile *.less files
module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: ['**/*.less', '!components/**/*.*'],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
