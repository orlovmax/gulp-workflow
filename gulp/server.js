import browserSync from 'browser-sync';
import { paths } from './_config.js';

const bs = browserSync.create();

// Reload browsersync server
function serverReload(done) {
  bs.reload();
  done();
}

// Run BrowserSync static server with live reload
function serverDev(done) {
  bs.init({
    server: paths.server.build,
    injectChanges: false,
    notify: false
  });
  done();
}

// Run BrowserSync static server
function serverProd(done) {
  bs.init({
    server: paths.server.dist,
    ui: false
  });
  done();
}

// Run BrowserSync static server
function serverDemo(done) {
  bs.init({
    server: paths.server.dist,
    ui: false
  });
  done();
}

export { serverDev, serverProd, serverDemo, serverReload }
