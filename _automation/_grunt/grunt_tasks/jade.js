// Compile Jade templates
module.exports = {
	all: {
		options: {
			client: false,
			pretty: true
		},
		files: [ {
			cwd: '<%= paths.dev.jade %>',
			src: ['*.jade'],
			dest: '<%= paths.build.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
