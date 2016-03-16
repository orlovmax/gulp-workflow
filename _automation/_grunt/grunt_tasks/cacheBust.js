// Cache bust static assets using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		ignorePatterns: ['favicon.ico'],
		// deleteOriginals: true,
		rename: true,
		filters: [{
			// 'img':
			// function() {
			// 	return this.attribs['data-src'];
			// }
		}]
	},
	markup: {
		files: [{
			expand: true,
        	cwd: '<%= paths.build.html %>',
        	baseDir: '<%= paths.build.html %>',
			src: ['*.html']
		}]
	},
	styles: {
		files: [{
			expand: true,
			cwd: '<%= paths.build.css %>',
			baseDir: '<%= paths.build.css %>',
			src: ['*.css']
		}]

	}
}
