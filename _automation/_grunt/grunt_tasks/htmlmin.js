// Minify HTML
module.exports = {
	all: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= paths.build.html %>',
			src: '*.html',
			dest: '<%= paths.build.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
