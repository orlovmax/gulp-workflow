// Compress dev and build version
module.exports = {
	build: {
		options: {
		  archive: '<%= archives.build %>'
		},
		expand: true,
		cwd: '<%= build.main %>',
		src: ['**/*']
	},
	dev: {
		options: {
		  archive: '<%= archives.dev %>'
		},
		files: [
			{src: ['<%= dev.main %>/**']},
			{src: ['grunt/**']},
			{flatten: true, src: ['./*', '.editorconfig'], filter: 'isFile'}
		]
	},
	all: {
		options: {
		  archive: '<%= archives.all %>'
		},
		files: [
			{src: ['<%= dev.main %>/**']},
			{src: ['<%= build.main %>/**']},
			{src: ['grunt/**']},
			{flatten: true, src: ['./*', '.editorconfig'], filter: 'isFile'}
		]
	}
}
