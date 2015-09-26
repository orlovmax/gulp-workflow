// Grunt.js task providing one-way synchronization of directories
module.exports = {
	php: {
		files: [{
			expand: true,
			cwd: '<%= dev.php %>/',
			src: '**',
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
	js: {
		files: [{
			expand: true,
			cwd: '<%= dev.js %>/',
			src: [
				'**/assembled.js',
				'**/vendor.js',
				'**/head.js',
				'**/ie.js'],
			dest: '<%= build.js %>/'
		}]
	},
	livejs: {
		files: [{
			expand: true,
			cwd: '<%= dev.devtools %>/',
			src: '**/live.js',
			dest: '<%= build.js %>/'
		}]
	},
	css: {
		files: [{
			expand: true,
			cwd: '<%= dev.css %>',
			src: ['**/*.css'],
			dest: '<%= build.css %>/'
		}]
	},
	html: {
		files: [{
			expand: true,
			cwd: '<%= dev.html %>',
			src: ['**/*.html'],
			dest: '<%= build.main %>'
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
			cwd: '<%= dev.img %>',
			src: ['**/*.*'],
			dest: '<%= build.img %>'
		}]
	}
}
