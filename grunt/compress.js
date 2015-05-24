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
			{src: ['<%= dev.coffee %>/**',
				   '<%= dev.js %>/**',
				   '<%= dev.templates %>/**',
				   '<%= dev.styles %>/**',
				   '<%= dev.css %>/**',
				   '<%= dev.html %>/**',
				   '<%= dev.img %>/**',
				   '<%= dev.fonts %>/**',
				   '<%= dev.helpers %>/**',
				   '<%= dev.devtools %>/**']},
			{src: ['grunt/**']},
			{flatten: true, src: ['./*', '.editorconfig', '.gitignore'], filter: 'isFile'}
		]
	},
	all: {
		options: {
		  archive: '<%= archives.all %>'
		},
		files: [
			{src: ['<%= dev.coffee %>/**',
				   '<%= dev.js %>/**',
				   '<%= dev.templates %>/**',
				   '<%= dev.styles %>/**',
				   '<%= dev.css %>/**',
				   '<%= dev.html %>/**',
				   '<%= dev.img %>/**',
				   '<%= dev.fonts %>/**',
				   '<%= dev.helpers %>/**',
				   '<%= dev.devtools %>/**']},
			{src: ['<%= build.main %>/**']},
			{src: ['grunt/**']},
			{flatten: true, src: ['./*', '.editorconfig', '.gitignore'], filter: 'isFile'}
		]
	}
}
