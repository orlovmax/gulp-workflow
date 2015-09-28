module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
				coffee: '<%= dev.main %>/coffee',
				js: '<%= dev.main %>/js',
				templates: '<%= dev.main %>/templates',
				styles: '<%= dev.main %>/styles',
				css: '<%= dev.main %>/css',
				html: '<%= dev.main %>/html',
				img: '<%= dev.main %>/img',
				fonts: '<%= dev.main %>/fonts',
				helpers: '<%= dev.main %>/helpers',
				php: '<%= dev.main %>/php',
				devtools: '<%= dev.main %>/devtools',
				mockup: '<%= dev.main %>/mockup'
			},
			// Build paths
			build: {
				main: 'build',
				css: '<%= build.main %>/css',
				fonts: '<%= build.main %>/fonts',
				img: '<%= build.main %>/img',
				php: '<%= build.main %>/php',
				js: '<%= build.main %>/js'
			},
			// Zip result
			archives: {
				main: 'archives',
				build: '<%= archives.main %>/build-ver.zip',
				dev: '<%= archives.main %>/dev-ver.zip',
				all: '<%= archives.main %>/project.zip'
			},
			server: {
				main: 'build',
				files: '<%= server.main %>'
			}
		}
	});
};
