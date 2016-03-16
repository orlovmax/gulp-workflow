// Concatenate files.
module.exports = {
	main: {
		files: [{
			src: ['<%= paths.dev.js %>/main/*.js'],
			dest: '<%= paths.build.js %>/main.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= paths.dev.js %>/head/*.js'],
			dest: '<%= paths.build.js %>/head.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= paths.dev.js %>/ie/*.js'],
			dest: '<%= paths.build.js %>/ie.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= paths.dev.js %>/vendor/*.js'],
			dest: '<%= paths.build.js %>/vendor.js'
		}]
	}
}
