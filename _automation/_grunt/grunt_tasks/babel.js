// Compile ES6 code
module.exports = {
	options: {
		presets: ['es2015'],
		babelrc: false
	},
	main: {
		files: [{
			'<%= paths.build.js %>/body.min.js': '<%= paths.build.js %>/body.min.js',
			'<%= paths.build.js %>/head.min.js': '<%= paths.build.js %>/head.min.js'
		}]
	}
}
