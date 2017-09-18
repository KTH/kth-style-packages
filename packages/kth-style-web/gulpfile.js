'use strict'
const gulp = require('gulp')
const mergeStream = require('merge-stream')
var header = require('gulp-header');
const del = require('del')
const gulpLoadPlugins = require('gulp-load-plugins')
const $ = gulpLoadPlugins()

const globals = {
  dirname: __dirname
}

const { webpack, moveResources, sass, vendor, clean } = require('kth-node-build-commons').tasks(globals)

/**
 * Usage:
 *
 *  One-time build of browser dependencies for development
 *
 *    $ gulp build:dev [--production | --development]
 *
 *  Deployment build
 *
 *    $ gulp build
 *
 *  Continuous re-build during development
 *
 *    $ gulp watch
 *
 *  Remove the generated files
 *
 *    $ gulp clean
 *
 */


// *** JavaScript helper tasks ***
gulp.task('transpileSass', () => sass())

/* Put any addintional helper tasks here */

/**
 *
 *  Public tasks used by developer:
 *
 */

gulp.task('clean', clean)

gulp.task('build', ['transpileSass'], () => sass())

gulp.task('watch', ['build'], function () {
  gulp.watch(['./public/css/**/*.scss'], ['transpileSass'])
})
