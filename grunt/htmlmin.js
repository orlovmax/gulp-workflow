//Minify *.html files
module.exports = {
	main: {
		options: {
			collapseWhitespace: true,
			minifyJS: true,
			minifyCSS: true
		},
		files: [ {
			cwd: '<%= build.main %>',
			src: '**/*.html',
			dest: '<%= build.main %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
