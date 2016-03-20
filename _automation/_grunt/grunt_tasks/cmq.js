// Combine matching media queries into one media query definition
module.exports = {
	options: {
		log: false
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.min.css'],
			dest: '<%= paths.build.css %>'
		}]
	}
}
