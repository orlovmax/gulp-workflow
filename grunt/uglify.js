// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.js %>',
			src: ['*.js', '!*.min.js'],
			dest: '<%= build.js %>',
			ext: '.min.js'
		}]
	}
}
