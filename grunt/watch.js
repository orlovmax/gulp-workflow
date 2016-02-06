// Run tasks whenever watched files change
module.exports = {
	dev: {
		files: [
			'<%= dev.sass %>/*.{sass,scss}',
			'<%= dev.stylus %>/*.styl',
			'<%= dev.coffee %>/**/*.coffee',
			'<%= dev.js %>/**/*.js',
			'<%= dev.jade %>/*.jade',
			'<%= dev.php %>/**/*.*',
			'<%= dev.images %>/**/*.*',
			'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}',
			'<%= dev.helpers %>/**/*.*',
			'<%= dev.helpers %>/.htaccess',
			'<%= dev.devtools %>/index.html'
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
			'newer:jade',
			'sync:intro',
			'sync:helpers',
			'sync:php',
			'sync:fonts',
			'sync:images'
		],
		options: {
			spawn: false,
		}
	}
}
