'use strict'
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')

const globals = {
  dirname: __dirname
}

const { sass, clean } = require('kth-node-build-commons').tasks(globals)

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
gulp.task('moveStatic', () => {
  return gulp.src('./public/img/**').pipe(gulp.dest('dist/img'))
})

/**
 *
 *  Public tasks used by developer:
 *
 */

gulp.task('clean', clean)

gulp.task('build', ['transpileSass', 'moveStatic'], () => sass())

gulp.task('watch', ['build'], function () {
  gulp.watch(['./public/css/**/*.scss'], ['transpileSass'])
})
