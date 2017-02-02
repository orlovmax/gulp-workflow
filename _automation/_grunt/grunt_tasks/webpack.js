// Compile ES6 code, bundle files
var path = require('path');

module.exports = {
	main: {
		entry: {
			head: path.resolve('<%= paths.dev.js %>/head.js'),
			body: path.resolve('<%= paths.dev.js %>/body.js')
		},
   		output: {
			path: path.resolve('<%= paths.build.js %>'),
			filename: '[name].min.js'
		},
		module: {
			loaders: [
			  {
			    test: /\.js$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel-loader',
			    query: {
			      presets: ['es2015']
			    }
			  }
			]
		}
	}
}
