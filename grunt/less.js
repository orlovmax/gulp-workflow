// Compile LESS files to CSS
module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= dev.less %>',
			src: [ '*.less' ],
			dest: '<%= build.css %>',
			ext: '.css'
		}]
	}
}
