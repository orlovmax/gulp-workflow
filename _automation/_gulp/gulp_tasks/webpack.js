// Compile ES6 code, bundle files
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	path = require('path'),
	rename = require('gulp-rename'),
	named = require('vinyl-named'),
	webpack = require('webpack-stream');

// Bundle js
gulp.task('webpack', function() {
	return gulp.src([
		paths.dev.js + '/head.js',
		paths.dev.js + '/body.js'
	])
		.pipe(plumber())
		.pipe(named())
		.pipe(webpack({
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
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.js));
});
