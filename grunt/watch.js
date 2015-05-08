//Watch for changes
module.exports = {
	all: {
		files: ['<%= dev.html %>/**/*.html',
				'<%= dev.styles %>/**/*.{scss,sass,less,styl}',
				'<%= dev.css %>/*.css',
				'<%= dev.coffee %>/**/*.coffee',
				'<%= dev.js %>/**/*.js',
				'<%= dev.img %>/**/*.{png,jpg,gif}',
				'<%= dev.templates %>/pages/**/*.jade',
				'<%= dev.php %>/**/*.php',
				'<%= dev.fonts %>/**/*.{eot,svg,ttf,woff}'],
		tasks: ['default'],
		options: {
			spawn: false,
		},
	}
}
