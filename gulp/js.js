import * as fs from 'fs';
import {rollup} from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { paths } from './_config.js';

// Bundle scripts
function jsDev(done) {
  fs.readdirSync(paths.js.src).forEach(function (file) {
    if (!file.match('.js')) return false
    return rollup({
      input: paths.js.src + file,
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        commonjs(),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          presets: ['@babel/preset-env'],
          babelrc: false
        })
      ]
    }).then(bundle => {
      return bundle.write({
        file: paths.js.build + file,
        format: 'iife',
        name: file.split('.')[-2]
      });
    }).catch((e) => console.log(e))
  })
  done();
}

// Bundle scripts, minify scripts
function jsProd(done) {
  fs.readdirSync(paths.js.src).forEach(function (file) {
    if (!file.match('.js')) return false
    return rollup({
      input: paths.js.src + file,
      plugins: [
        nodeResolve({
          browser: true,
          preferBuiltins: false
        }),
        commonjs(),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          presets: ['@babel/preset-env'],
          babelrc: false
        })
      ]
    }).then(bundle => {
      return bundle.write({
        file: paths.js.dist + file,
        format: 'iife',
        name: file.split('.')[-2],
        plugins: [terser()]
      });
    }).catch((e) => console.log(e))
  });
  done();
}

export { jsDev, jsProd }
