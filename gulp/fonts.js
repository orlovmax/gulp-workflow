import gulp from 'gulp';
import changed from 'gulp-changed';
import { paths } from './_config.js';

// Copy fonts
function fontsDev() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.build))
}

// Copy changed fonts
function fontsDevChanged() {
  return gulp.src(paths.fonts.src)
    .pipe(changed(paths.fonts.build))
    .pipe(gulp.dest(paths.fonts.build))
}

// Copy fonts
function fontsProd() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dist))
}

export { fontsDev, fontsDevChanged, fontsProd }
