// Generate webfonts and css ready to use on your site
module.exports = {
		options: {
			// Task-specific options go here.
		},
		all: {
			options: {
				path_prefix: '<%= dev.mockup %>/fonts',
				stylesheet: '<%= dev.mockup %>/fonts/fonts.css',
			},
			files: [{
				src: [
					'<%= dev.mockup %>/fonts/<%= font_dir %>/*.otf'
					'<%= dev.mockup %>/fonts/<%= font_dir %>/*.ttf',
				],
				dest: '<%= dev.fonts %>/<%= font_dir %>'
			}]
		}
}
