// Cache bust static assets using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		ignorePatterns: ['favicon.ico'],
		deleteOriginals: true,
		rename: true,
		filters: [{
			// 'img':
			// function() {
			// 	return this.attribs['data-src'];
			// }
		}]
	},
	assets: {
		files: [{
			expand: true,
        	cwd: '<%= build.html %>',
        	baseDir: '<%= build.html %>',
			src: ['*.html']
		}]
	},
	styles: {
		files: [{
			expand: true,
			cwd: '<%= build.css %>',
			baseDir: '<%= build.css %>',
			src: ['*.css']
		}]

	}
}
