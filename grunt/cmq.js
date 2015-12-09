// Combine matching media queries into one media query definition
module.exports = {
	options: {
		log: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= build.css %>'
		}]
	}
}
