//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= dev.html %>',
			src: '*.html',
			dest: '<%= build.main %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
