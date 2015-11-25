// Grunt.js task providing one-way synchronization of directories
module.exports = {
	php: {
		files: [{
			expand: true,
			cwd: '<%= dev.php %>/',
			src: '*.*',
			dest: '<%= build.php %>'
		}]
	},
	fonts: {
		files: [{
			expand: true,
			cwd: '<%= dev.fonts %>/',
			src: ['**/*.{eot,svg,ttf,otf,woff,woff2}'],
			dest: '<%= build.fonts %>'
		}]
	},
	livejs: {
		files: [{
			expand: true,
			cwd: '<%= dev.devtools %>/',
			src: '/live.js',
			dest: '<%= build.js %>/'
		}]
	},
	helpers: {
		files: [{
			expand: true,
			cwd: '<%= dev.helpers %>',
			src: ['**/*.*', '**/.htaccess'],
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
