// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.build.js %>',
			src: ['*.min.js'],
			dest: '<%= paths.build.js %>'
		}]
	}
}
