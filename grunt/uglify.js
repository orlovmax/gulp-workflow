// Minify files with UglifyJS
module.exports = {
	options: {
		mangle: false
	},
	main: {
		files: [{
			src: ['<%= build.js %>/assembled.js'],
			dest: '<%= build.js %>/assembled.min.js'
		}]
	},
	head: {
		files: [{
			src: ['<%= build.js %>/head/head.js'],
			dest: '<%= build.js %>/head/head.min.js'
		}]
	},
	ie: {
		files: [{
			src: ['<%= build.js %>/ie/ie.js'],
			dest: '<%= build.js %>/ie/ie.min.js'
		}]
	},
	vendor: {
		files: [{
			src: ['<%= build.js %>/vendor/vendor.js'],
			dest: '<%= build.js %>/vendor/vendor.min.js'
		}]
	}
}
