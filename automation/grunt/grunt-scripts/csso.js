// Minify CSS files with CSSO
module.exports = {
	options: {
		keepSpecialComments: '*',
		restructure: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= build.css %>',
			ext: '.min.css'
		}]
	}
}
