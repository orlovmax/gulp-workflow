// Run tasks whenever watched files change
module.exports = {
	coffee: {
		files: [
			'<%= paths.dev.coffee %>/*.coffee'
		],
		tasks: [
			'newer:coffee',
			'rigger'
		],
		options: {
			spawn: false
		}
	},
	js: {
		files: [
			'<%= paths.dev.js %>/*.js',
			'<%= paths.dev.js %>/lib/*.js'
		],
		tasks: [
			'rigger'
		],
		options: {
			spawn: false
		}
	},
	sass: {
		files: [
			'<%= paths.dev.sass %>/*.{sass,scss}'
		],
		tasks: [
			'newer:sass',
			'autoprefixer',
        	'cmq'
		],
		options: {
			spawn: false
		}
	},
	stylus: {
		files: [
			'<%= paths.dev.stylus %>/*.styl'
		],
		tasks: [
			'newer:stylus',
			'autoprefixer',
        	'cmq'
		],
		options: {
			spawn: false
		}
	},
	data: {
		files: [
			'<%= paths.dev.data %>/*.*'
		],
		tasks: [
			'async_jade_data',
			'jade'
		],
		options: {
			spawn: false
		}
	},
	jade: {
		files: [
			'<%= paths.dev.jade %>/*.jade'
		],
		tasks: [
			'newer:jade'
		],
		options: {
			spawn: false
		}
	},
	images: {
		files: [
			'<%= paths.dev.images %>/**/*.*'
		],
		tasks: [
			'sync:images'
		],
		options: {
			spawn: false
		}
	},
	fonts: {
		files: [
			'<%= paths.dev.fonts %>/**/*.{eot,svg,ttf,otf,woff,woff2}'
		],
		tasks: [
			'sync:fonts'
		],
		options: {
			spawn: false
		}
	},
	helpers: {
		files: [
			'<%= paths.dev.helpers %>/**/*.*',
			'<%= paths.dev.helpers %>/.htaccess'
		],
		tasks: [
			'sync:helpers'
		],
		options: {
			spawn: false
		}
	}
}
