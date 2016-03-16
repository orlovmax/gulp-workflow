// Process html files at build time to modify them depending on the release environment
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= paths.build.html %>',
			src: ['*.html'],
			dest: '<%= paths.build.html %>',
			ext: '.html'
		}],
	}
}
