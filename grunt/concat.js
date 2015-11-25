// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= dev.js %>/*.js'],
			dest: '<%= build.js %>/assembled.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= dev.js %>/head/*.js'],
			dest: '<%= build.js %>/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= dev.js %>/ie/*.js'],
			dest: '<%= build.js %>/ie.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= dev.js %>/vendor/*.js'],
			dest: '<%= build.js %>/vendor.js'
		}]
	}
}
