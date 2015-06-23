//Compile *.less files
module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: ['**/*.less', '!components/**/*.*', '!helpers/**/*.*'],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
