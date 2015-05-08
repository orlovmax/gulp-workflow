//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= dev.html %>',
			src: ['**/*.html'],
			dest: '<%= dev.html %>',
			ext: '.html'
		}],
	}
}
