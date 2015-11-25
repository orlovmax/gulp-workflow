// Compile Sass to CSS
module.exports = {
	sass: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= dev.sass %>',
			src: [ '*.sass' ],
			dest: '<%= build.css %>',
			ext: '.css'
		}]
	},
	scss: {
		options: {
			style: 'expanded',
			sourcemap: 'none'
		},
		files: [{
			expand: true,
			cwd: '<%= dev.scss %>',
			src: [ '*.scss' ],
			dest: '<%= build.css %>',
			ext: '.css'
		}]
	}
}
