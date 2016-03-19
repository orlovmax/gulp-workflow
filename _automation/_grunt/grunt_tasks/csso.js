// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.build.css %>',
			ext: '.min.css'
		}]
	}
}
