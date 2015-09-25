// Parse CSS and add vendor-prefixed CSS properties using the Can I Use database
module.exports = {
	options: {
		//By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
		browsers: ['> 1%', 'last 10 versions', 'Opera 12.1', 'Explorer > 7', 'Safari >= 5'],
		cascade: true
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= build.css %>/',
			src: ['**/*.css', '!*.min.css'],
			dest: '<%= build.css %>/'
		}]
	}
}
