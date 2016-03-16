// Run tasks whenever watched files change
module.exports = {
	dev: {
		files: [
			'<%= paths.dev.sass %>/*.{sass,scss}',
			'<%= paths.dev.stylus %>/*.styl',
			'<%= paths.dev.coffee %>/**/*.coffee',
			'<%= paths.dev.js %>/**/*.js',
			'<%= paths.dev.jade %>/*.jade',
			'<%= paths.dev.images %>/**/*.*',
			'<%= paths.dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}',
			'<%= paths.dev.helpers %>/**/*.*',
			'<%= paths.dev.helpers %>/.htaccess'
		],
		tasks: [
			'newer:coffee:main',
			'newer:coffee:head',
			'newer:coffee:vendor',
			'newer:concat:main',
			'newer:concat:head',
			'newer:concat:ie',
			'newer:concat:vendor',
			'newer:sass',
			'newer:stylus',
			'autoprefixer',
        	'cmq',
			'newer:jade',
			'sync:helpers',
			'sync:fonts',
			'sync:images'
		],
		options: {
			spawn: false,
		}
	}
}
