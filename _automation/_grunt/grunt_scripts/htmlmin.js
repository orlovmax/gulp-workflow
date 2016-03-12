// Minify HTML
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= build.html %>',
			src: '*.html',
			dest: '<%= build.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
