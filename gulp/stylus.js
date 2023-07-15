import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import sortMediaQueries from 'postcss-sort-media-queries';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import stylus from 'gulp-stylus';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import { paths } from './_config.js';

// Compile stylus stylesheets, combine media queries, add vendor prefixes
function stylusDev() {
  let postcssPluginsDev = [
    sortMediaQueries(),
    autoprefixer({cascade: false})
  ];
  return gulp.src(paths.stylus.src)
    .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(postcssPluginsDev))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.stylus.build));
}

// Compile stylus stylesheets, combine media queries, add vendor prefixes, minify stylesheets
function stylusProd() {
  let postcssPluginsProd = [
    sortMediaQueries(),
    autoprefixer({cascade: false}),
    csso({restructure: false})
  ];
  return gulp.src(paths.stylus.src)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(postcss(postcssPluginsProd))
    .pipe(gulp.dest(paths.stylus.dist));
}

export { stylusDev, stylusProd }
