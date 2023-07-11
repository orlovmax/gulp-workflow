import * as fs from 'fs';
import * as path from 'path';
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import { paths } from './_config.js';

// Get data from config.json
function getPugConfigData(pugConfigFile) {
  let data = {}
  data[path.parse(pugConfigFile).name] = JSON.parse(fs.readFileSync(pugConfigFile));
  return data
};

// Compile pug templates
function pugDev() {
  return gulp.src(paths.pug.src)
  .pipe(plumber())
  .pipe(pug({
    client: false,
    pretty: true,
    data: getPugConfigData(paths.pug.config) || {}
  }).on('error', function(err) {
    console.log(err);
  }))
  .pipe(gulp.dest(paths.pug.build));
}

// Compile pug templates, minify markup
function pugProd() {
  return gulp.src(paths.pug.src)
  .pipe(plumber())
  .pipe(pug({
    client: false,
    data: getPugConfigData(paths.pug.config) || {}
  }).on('error', function(err) {
    console.log(err);
  }))
  .pipe(gulp.dest(paths.pug.dist));
}

export { pugDev, pugProd }
