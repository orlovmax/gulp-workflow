//Copy some folders or files (ex. *.php) from dev to build
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
			src: ['**/*.{eot,svg,ttf,woff}'],
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
	}
}
