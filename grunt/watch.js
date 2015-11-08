// Run tasks whenever watched files change
module.exports = {
	all: {
		files: ['<%= dev.html %>/**/*.html',
				'<%= dev.less %>/*.less',
				'<%= dev.scss %>/*.scss',
				'<%= dev.sass %>/*.sass',
				'<%= dev.stylus %>/*.styl',
				'<%= dev.css %>/*.css',
				'<%= dev.coffee %>/**/*.coffee',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}',
				'<%= dev.jade %>/pages/**/*.jade',
				'<%= dev.php %>/**/*.php',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'],
		tasks: ['default'],
		options: {
			spawn: false,
		},
	}
}
