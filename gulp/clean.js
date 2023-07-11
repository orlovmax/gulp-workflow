import {rimrafSync} from 'rimraf';
import { paths } from './_config.js';

const cleanOptions = {preserveRoot: true, glob: true}

// Remove .gitkeep files
function cleanGitkeep(done) {
  rimrafSync(paths.clean.gitkeep, cleanOptions);
  done();
}

// Empty build folder
function cleanDev(done) {
  rimrafSync(paths.clean.build, cleanOptions);
  done();
}

// Empty dist folder
function cleanProd(done) {
  rimrafSync(paths.clean.dist, cleanOptions);
  done();
}

export { cleanDev, cleanProd, cleanGitkeep }
