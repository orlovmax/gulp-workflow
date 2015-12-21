// Run tasks whenever watched files change
module.exports = {
	main: {
		files: ['<%= dev.less %>/*.less',
				'<%= dev.scss %>/*.scss',
				'<%= dev.sass %>/*.sass',
				'<%= dev.stylus %>/*.styl',
				'<%= dev.coffee %>/*.coffee',
				'<%= dev.js %>/**/*.js',
				'<%= dev.jade %>/**/*.jade',
				'<%= dev.php %>/*.php',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}',
				'<%= dev.helpers %>/**/*.*',
				'<%= dev.helpers %>/.htaccess',
				'<%= dev.devtools %>/index.html'],
		tasks: ['dev'],
		options: {
			spawn: false,
		},
	}
}
