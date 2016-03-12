// Process html files at build time to modify them depending on the release environment
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= build.html %>',
			src: ['*.html'],
			dest: '<%= build.html %>',
			ext: '.html'
		}],
	}
}
