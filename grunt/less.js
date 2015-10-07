// Compile LESS files to CSS
module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= dev.less %>',
			src: [ '*.less' ],
			dest: '<%= dev.css %>',
			ext: '.css'
		}]
	}
}
