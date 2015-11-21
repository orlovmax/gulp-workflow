// The grunt plugin for sorting CSS properties in specific order.
module.exports = {
	options: {
	    config: './.csscomb.json'
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.css %>/',
			src: ['*.css', '!*.min.css'],
			dest: '<%= build.css %>/'
		}]
	}
}
