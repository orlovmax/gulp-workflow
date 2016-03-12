// Compile Stylus files to CSS
module.exports = {
	main: {
		options: {
			linenos: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= dev.stylus %>',
			src: [ '*.styl' ],
			dest: '<%= build.css %>',
			ext: '.css'
		}]
	}
}
