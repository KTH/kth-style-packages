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
gulp.task('webpack', webpack)
gulp.task('vendor', vendor)

gulp.task('moveResources', function () {
  // Returning merged streams at the end so Gulp knows when async operations have finished
  moveResources.cleanKthStyle()

  return mergeStream(
    moveResources.moveKthStyle(),
    moveResources.moveBootstrap(),
    moveResources.moveFontAwesome(),
    // Move project image files
    gulp.src('./public/img/**/*')
      .pipe(gulp.dest('dist/img'))
  )
})

const distRootFolderName = 'dist'

// Module for importing CSS files into a Sass file 
const cssImporter = require('node-sass-css-importer')({
    import_paths: ['public/fonts/fontello/css'] 
 });

// Information about KTH Style in the head of CSS file
const pkg = require('./package.json');
const banner = `/*!
  * ${pkg.name}  - ${pkg.description}
  * @version v${pkg.version}
  * @link ${pkg.repository.uri}
  */`
  
gulp.src('./foo/*.js')
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest('./dist/'))

gulp.task('createDist', function () {
  return mergeStream(
    gulp.src('./public/sass/kth-bootstrap.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass({includePaths: ['node_modules/bootstrap/scss'], importer: [cssImporter]}).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: ['last 4 versions']}))
      .pipe(header(banner, { pkg : pkg } ))
      .pipe(gulp.dest(`./${distRootFolderName}/css`))
      .pipe($.rename({ suffix: '.min' }))
      .pipe($.minifyCss())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(`./${distRootFolderName}/css`))
    ,
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
      .pipe(gulp.dest(`./${distRootFolderName}/js`))
    )
})

gulp.task('distFonts', function () {
  return mergeStream(
    gulp.src('./public/fonts/fontello/font/*.*')
      .pipe(gulp.dest(`./${distRootFolderName}/font`))
  )
})

gulp.task('distImagesAndIcons', function () {
  return gulp.src('./public/img/**/*.*')
    .pipe(gulp.dest(`./${distRootFolderName}/img`))
})

/* Main entry points */

gulp.task('clean', clean)

gulp.task('build', ['clean', 'createDist', 'distFonts', 'distImagesAndIcons'], () => {
  console.log('*** Done creating distribution ***')
})

// Listen for changes and re-dist
gulp.task('watch', function (done) {
  return gulp.watch(['public/sass/**/*.scss', 'public/css/**/*.scss', 'public/fonts/**/*.*'], ['dist'], done())
})
