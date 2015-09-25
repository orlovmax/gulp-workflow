// Compile Stylus files to CSS
module.exports = {
	main: {
		options: {
			linenos: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: [ '**/*.styl', '!components/**/*.*', '!helpers/**/*.*' ],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
