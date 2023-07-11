import gulp from 'gulp';
import changed from 'gulp-changed';
import minify from 'gulp-html-minifier-terser'
import { paths } from './_config.js';

// Copy html
function htmlDev() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.build));
}

// Copy changed html
function htmlDevChanged() {
  return gulp.src(paths.html.src)
    .pipe(changed(paths.html.build))
    .pipe(gulp.dest(paths.html.build));
}

// Copy html, minify html
function htmlProd() {
  return gulp.src(paths.html.src)
    .pipe(minify({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.html.dist));
}

export { htmlDev, htmlDevChanged, htmlProd }
