// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
	main: {
		src: ['<%= dev.images %>/sprite/*.png', '!<%= dev.images %>/sprite/sprite.png'],
		dest: '<%= dev.images %>/sprite/sprite.png',
		destCss: '<%= dev.images %>/sprite/sprites.css',
		algorithm: 'left-right',
		algorithmOpts: {sort: false},
		padding: 1
	}
}
