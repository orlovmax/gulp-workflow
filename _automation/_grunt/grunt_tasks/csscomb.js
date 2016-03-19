// The grunt plugin for sorting CSS properties in specific order.
module.exports = {
	options: {
	    config: './.csscomb.json'
	},
	all: {
		files:[{
			expand: true,
			cwd: '<%= paths.build.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.build.css %>'
		}]
	}
}
