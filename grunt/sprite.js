// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
	all: {
		src: ['<%= dev.img %>/sprite/*.png', '!<%= dev.img %>/sprite/sprite.png'],
		dest: '<%= dev.img %>/sprite/sprite.png',
		destCss: '<%= dev.img %>/sprite/sprites.css',
		algorithm: 'left-right',
		algorithmOpts: {sort: false},
		padding: 1
	}
}
