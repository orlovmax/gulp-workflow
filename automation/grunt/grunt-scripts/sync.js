// Grunt.js task providing one-way synchronization of directories
module.exports = {
	fonts: {
		files: [{
			expand: true,
			cwd: '<%= dev.fonts %>',
			src: ['**/*.{eot,svg,ttf,otf,woff,woff2}'],
			dest: '<%= build.fonts %>'
		}]
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= dev.helpers %>',
			src: ['*.*', '.htaccess'],
			dest: '<%= build.main %>'
		}]
	},
	images: {
		files: [{
			expand: true,
			cwd: '<%= dev.images %>',
			src: ['**/*.*'],
			dest: '<%= build.images %>'
		}]
	}
}
