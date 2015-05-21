module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
				coffee: 'dev/coffee',
				js: 'dev/js',
				templates: 'dev/templates',
				styles: 'dev/styles',
				css: 'dev/css',
				html: 'dev/html',
				img: 'dev/img',
				fonts: 'dev/fonts',
				helpers: 'dev/helpers',
				php: 'dev/php',
				devtools: 'dev/devtools'
			},
			// Build paths
			build: {
				main: 'build',
				css: 'build/css',
				fonts: 'build/fonts',
				img: 'build/img',
				php: 'build/php',
				js: 'build/js'
			},
			// Zip result
			archives: {
				build: 'archives/build-ver.zip',
				dev: 'archives/dev-ver.zip',
				all: 'archives/project.zip'
			}
		}
	});
};
