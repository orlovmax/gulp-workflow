module.exports = {
	// Dev paths
	dev: {
		main: 'dev',
		coffee: 'dev/coffee',
		js: 'dev/js',
		jade: 'dev/jade/pages',
		sass: 'dev/sass',
		stylus: 'dev/stylus',
		images: 'dev/images',
		fonts: 'dev/fonts',
		helpers: 'dev/helpers',
		data: 'dev/data'
	},
    // Build paths
    build: {
        main: 'build',
        html: 'build',
        css: 'build/static/css',
        fonts: 'build/static/fonts',
        images: 'build/static/images',
        js: 'build/static/js'
    },
	// By default >1%, last 2 versions, Firefox ESR, Opera 12.1;
	browserlist: [
		'> 1%',
		'last 30 versions',
		'Opera 12.1',
		'Explorer > 7',
		'Safari >= 5'
	]
};
