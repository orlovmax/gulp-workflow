//Delete .gitkeep files. If you don't use Bower - just run `grunt clean`
module.exports = {
	gitkeep: ['<%= dev.main %>/**/.gitkeep', '<%= build.main %>/**/.gitkeep'],
	less: '<%= dev.styles %>/**/*.less',
	scss: '<%= dev.styles %>/**/*.scss',
	sass: '<%= dev.styles %>/**/*.sass',
	stylus: '<%= dev.styles %>/**/*.styl',
	jade: '<%= dev.templates %>/**/*.jade',
	debug: ['<%= build.js %>/**/*.js',
			'!<%= build.js %>/**/*.min.js',
			'<%= build.css %>/**/*.css',
			'!<%= build.css %>/**/*.min.css'],
	bower: 'bower_components'
}
