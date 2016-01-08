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
				stylus: '<%= dev.main %>/stylus',
				images: '<%= dev.main %>/images',
				fonts: '<%= dev.main %>/fonts',
				helpers: '<%= dev.main %>/helpers',
				php: '<%= dev.main %>/php',
				devtools: '<%= dev.main %>/devtools'
			},
			// Build paths
			build: {
				main: 'build',
				html: '<%= build.main %>',
				css: '<%= build.main %>/css',
				fonts: '<%= build.main %>/fonts',
				images: '<%= build.main %>/images',
				php: '<%= build.main %>/php',
				js: '<%= build.main %>/js'
			},
			// By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
			browserlist: [
				'> 1%',
				'last 20 versions',
				'Opera 12.1',
				'Explorer > 7',
				'Safari >= 5'
			]
		},
		loadGruntTasks: {
			pattern: ['grunt-*', 'main-*'],
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
};
