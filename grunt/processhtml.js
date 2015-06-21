//Delete some dev code and references from files
module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: '<%= build.main %>',
			src: ['**/*.html'],
			dest: '<%= build.main %>',
			ext: '.html'
		}],
	}
}
