// Compile CoffeeScript files to JavaScript
module.exports = {
	main: {
		expand: true,
		flatten: true,
		cwd: '<%= dev.coffee %>',
		src: ['**/*.coffee', '!components/**/*.*'],
		dest: '<%= dev.js %>',
		ext: '.js',
		extDot: 'last'
	}
}
