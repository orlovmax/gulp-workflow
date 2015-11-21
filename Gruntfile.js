module.exports = function(grunt) {
	require('load-grunt-config')(grunt, {
		data: {
			// Dev paths
			dev: {
				main: 'dev',
				coffee: '<%= dev.main %>/coffee',
				js: '<%= dev.main %>/js',
				jade: '<%= dev.main %>/jade/pages',
				less: '<%= dev.main %>/less',
				sass: '<%= dev.main %>/sass',
				scss: '<%= dev.main %>/scss',
				stylus: '<%= dev.main %>/stylus',
				css: '<%= dev.main %>/css',
				html: '<%= dev.main %>/html',
				images: '<%= dev.main %>/images',
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
				images: '<%= build.main %>/images',
				php: '<%= build.main %>/php',
				js: '<%= build.main %>/js'
			},
			// Zip result
			zip: {
				main: 'zip',
				theme: '<%= zip.main %>/theme.zip'
			},
			server: {
				main: 'build',
				files: '<%= server.main %>'
			}
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
