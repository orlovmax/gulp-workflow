import gulp from 'gulp';
import { cleanDev, cleanProd, cleanGitkeep } from './gulp/clean.js';
// import { htmlDev, htmlProd } from './gulp/html.js';
import { pugDev, pugProd } from './gulp/pug.js';
// import { cssDev, cssProd } from './gulp/css.js';
import { sassDev, sassProd } from './gulp/sass.js';
// import { stylusDev, stylusProd } from './gulp/stylus.js';
import { jsDev, jsProd } from './gulp/js.js';
import { fontsDev, fontsProd } from './gulp/fonts.js';
import { imagesDev, imagesProd } from './gulp/images.js';
// import { videosDev, videosProd } from './gulp/videos.js';
import { helpersDev, helpersProd } from './gulp/helpers.js';
import { serverDev, serverProd, serverDemo } from './gulp/server.js';
import { watchDev } from './gulp/watch.js';

// CLEANUP TASK
// Removes .gitkeep placeholders from work directories
export const cleanup = gulp.series(
  cleanGitkeep
);

// DEVELOPMENT TASK
// Compiles pug, sass, copies css, bundles scripts, copies fonts/ images/ videos/ helpers,
// runs static server, watches for changes and reloads page
export const dev = gulp.series(
  pugDev,
  sassDev,
  jsDev,
  fontsDev,
  imagesDev,
  helpersDev,
  serverDev,
  watchDev
);

// PRODUCTION TASK
// Builds project from sources, minifies markup / stylesheets / scripts, runs static server
export const prod = gulp.series(
  cleanProd,
  pugProd,
  sassProd,
  jsProd,
  fontsProd,
  imagesProd,
  helpersProd,
  serverProd
);

// DEMONSTRATION TASK
// Runs static server
export const demo = gulp.series(
  serverDemo
);

// DEFAULT TASK
export default dev;
