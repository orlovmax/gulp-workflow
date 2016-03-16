// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.dev.coffee %>/main',
		src: ['*.coffee'],
		dest: '<%= paths.dev.js %>/main',
		ext: '.js',
		extDot: 'last'
	},
	head: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.dev.coffee %>/head',
		src: ['*.coffee'],
		dest: '<%= paths.dev.js %>/head',
		ext: '.js',
		extDot: 'last'
	},
	vendor: {
		expand: true,
		flatten: true,
		cwd: '<%= paths.dev.coffee %>/vendor',
		src: ['*.coffee'],
		dest: '<%= paths.dev.js %>/vendor',
		ext: '.js',
		extDot: 'last'
	}
}
