import gulp from 'gulp';
// import { htmlDevChanged } from './html.js';
import { pugDev } from './pug.js';
// import { cssDev } from './css.js';
import { sassDev } from './sass.js';
// import { stylusDev } from './stylus.js';
import { jsDev } from './js.js';
import { fontsDevChanged } from './fonts.js';
import { imagesDevChanged } from './images.js';
// import { videosDevChanged } from './videos.js';
import { helpersDevChanged } from './helpers.js';
import { serverReload } from './server.js';
import { paths } from './_config.js';

// Watch for changes and run dev tasks
function watchDev() {
  // Watch html
  // gulp.watch(
  //   paths.html.watch,
  //   gulp.series(htmlDevChanged, serverReload)
  // );

  // Watch pug
  gulp.watch(
    paths.pug.watch,
    gulp.series(pugDev, serverReload)
  );

  // Watch css
  // gulp.watch(
  //   paths.css.watch,
  //   gulp.series(cssDev, serverReload)
  // );

  // Watch sass
  gulp.watch(
    paths.sass.watch,
    gulp.series(sassDev, serverReload)
  );

  // Watch stylus
  // gulp.watch(
  //   paths.stylus.watch,
  //   gulp.series(stylusDev, serverReload)
  // );

  // Watch js
  gulp.watch(
    paths.js.watch,
    gulp.series(jsDev, serverReload)
  );

  // Watch fonts
  gulp.watch(
    paths.fonts.watch,
    gulp.series(fontsDevChanged, serverReload)
  );

  // Watch images
  gulp.watch(
    paths.images.watch,
    gulp.series(imagesDevChanged, serverReload)
  );

  // Watch videos
  // gulp.watch(
  //   paths.videos.watch,
  //   gulp.series(videosDevChanged, serverReload)
  // );

  // Watch helpers
  gulp.watch(
    paths.helpers.watch,
    gulp.series(helpersDevChanged, serverReload)
  );
}

export { watchDev };
