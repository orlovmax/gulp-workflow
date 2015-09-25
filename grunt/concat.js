// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= dev.js %>/*.js', '!<%= dev.js %>/assembled.js'],
			dest: '<%= dev.js %>/assembled.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= dev.js %>/head/*.js', '!<%= dev.js %>/head/head.js'],
			dest: '<%= dev.js %>/head/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= dev.js %>/ie/*.js', '!<%= dev.js %>/ie/ie.js'],
			dest: '<%= dev.js %>/ie/ie.js'
		}]
	}
}
