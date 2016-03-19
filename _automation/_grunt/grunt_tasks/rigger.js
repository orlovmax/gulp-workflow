// Concatenate files.
module.exports = {
	all: {
		files: [{
			'<%= paths.build.js %>/ie.js': '<%= paths.dev.js %>/ie.js',
			'<%= paths.build.js %>/body.js': '<%= paths.dev.js %>/body.js',
			'<%= paths.build.js %>/head.js': '<%= paths.dev.js %>/head.js'
		}]
	}
}
