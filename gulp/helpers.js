import gulp from 'gulp';
import changed from 'gulp-changed';
import { paths } from './_config.js';

// Copy helpers
function helpersDev() {
  return gulp.src(paths.helpers.src)
    .pipe(gulp.dest(paths.helpers.build))
}

// Copy changed helpers
function helpersDevChanged() {
  return gulp.src(paths.helpers.src)
    .pipe(changed(paths.helpers.build))
    .pipe(gulp.dest(paths.helpers.build))
}

// Copy helpers
function helpersProd() {
  return gulp.src(paths.helpers.src)
    .pipe(gulp.dest(paths.helpers.dist))
}

export { helpersDev, helpersDevChanged, helpersProd }
