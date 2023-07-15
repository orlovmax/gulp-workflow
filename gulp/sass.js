import * as dartSass from 'sass';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import sortMediaQueries from 'postcss-sort-media-queries';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import { paths } from './_config.js';

const sass = gulpSass(dartSass);

// Compile sass stylesheets, combine media queries, add vendor prefixes, generate sourcemaps
function sassDev() {
  let postcssPluginsDev = [
    sortMediaQueries(),
    autoprefixer({cascade: false})
  ];
  return gulp.src(paths.sass.src)
    .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss(postcssPluginsDev))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.sass.build));
}

// Compile sass stylesheets, combine media queries, add vendor prefixes, minify stylesheets
function sassProd() {
  let postcssPluginsProd = [
    sortMediaQueries(),
    autoprefixer({cascade: false}),
    csso({restructure: false})
  ];
  return gulp.src(paths.sass.src)
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss(postcssPluginsProd))
    .pipe(gulp.dest(paths.sass.dist));
}

export { sassDev, sassProd }
