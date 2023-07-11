import sortMediaQueries from 'postcss-sort-media-queries';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import { paths } from './_config.js';

// Process css stylesheets, inline imports, combine media queries, add vendor prefixes
function cssDev() {
  let postcssPluginsDev = [
    postcssImportExtGlob(),
    postcssImport(),
    sortMediaQueries(),
    autoprefixer({cascade: false})
  ];
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(postcss(postcssPluginsDev))
    .pipe(gulp.dest(paths.css.build));
}

// Process css stylesheets, inline imports, combine media queries, add vendor prefixes, minify stylesheets
function cssProd() {
  let postcssPluginsProd = [
    postcssImportExtGlob(),
    postcssImport(),
    sortMediaQueries(),
    autoprefixer({cascade: false}),
    csso({restructure: false})
  ];
  return gulp.src(paths.css.src)
    .pipe(plumber())
    .pipe(postcss(postcssPluginsProd))
    .pipe(gulp.dest(paths.css.dist));
}

export { cssDev, cssProd }
