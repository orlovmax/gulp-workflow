import gulp from 'gulp';
import changed from 'gulp-changed';
import { paths } from './_config.js';

// Copy videos
function videosDev() {
  return gulp.src(paths.videos.src)
    .pipe(gulp.dest(paths.videos.build))
}

// Copy changed videos
function videosDevChanged() {
  return gulp.src(paths.videos.src)
    .pipe(changed(paths.videos.build))
    .pipe(gulp.dest(paths.videos.build))
}

// Copy videos
function videosProd() {
  return gulp.src(paths.videos.src)
    .pipe(gulp.dest(paths.videos.dist))
}

export { videosDev, videosDevChanged, videosProd }
