import gulp from 'gulp';
import changed from 'gulp-changed';
import { paths } from './_config.js';

// Copy images
function imagesDev() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.build))
}

// Copy changed images
function imagesDevChanged() {
  return gulp.src(paths.images.src)
    .pipe(changed(paths.images.build))
    .pipe(gulp.dest(paths.images.build))
}

// Copy images
function imagesProd() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dist))
}

export { imagesDev, imagesDevChanged, imagesProd }
