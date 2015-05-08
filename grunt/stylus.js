//Compile *.styl files
module.exports = {
	main: {
		options: {
			linenos: false,
			compress: false
		},
		files: [{
			expand: true,
			cwd: '<%= dev.styles %>',
			src: [ '**/*.styl', '!components/**/*.*' ],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
