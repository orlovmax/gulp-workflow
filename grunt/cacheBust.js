// Cache bust static assets using content hashing
module.exports = {
	options: {
		encoding: 'utf8',
		algorithm: 'md5',
		length: 16,
		// ignorePatterns: ['icons'],
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
        	cwd: '<%= build.main %>',
        	baseDir: '<%= build.main %>',
			src: ['*.html']
		}]
	}
}
