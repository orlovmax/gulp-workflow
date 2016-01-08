// Compile Sass to CSS
module.exports = {
	sass: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= dev.sass %>',
			src: [ '*.{sass,scss}' ],
			dest: '<%= build.css %>',
			ext: '.css'
		}]
	}
}
