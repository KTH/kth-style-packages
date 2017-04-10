'use strict'
const gulp = require('gulp')
const mergeStream = require('merge-stream')

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

// *** Deployment helper tasks ***
gulp.task('webpackDeploy', function () {
  // Returning merged streams at the end so Gulp knows when async operations have finished
  return mergeStream(
    webpack('reference'),
    webpack('production')
  )
})

gulp.task('vendorDeploy', function () {
  // Returning merged streams at the end so Gulp knows when async operations have finished
  return mergeStream(
    vendor('reference'),
    vendor('production')
  )
})

// *** Development helper tasks ***
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

gulp.task('transpileSass', () => sass())

/* Put any addintional helper tasks here */

/**
 *
 *  Public tasks used by developer:
 *
 */

gulp.task('clean', clean)

gulp.task('build:dev', ['moveResources', 'vendor', 'webpack', 'dist'], () => sass())

gulp.task('build', ['moveResources', 'vendorDeploy', 'webpackDeploy', 'dist'], () => sass())

gulp.task('watch', ['build:dev'], function () {
  gulp.watch(['./public/js/app/**/*.js', './public/js/components/**/*'], ['webpack'])
  gulp.watch(['./public/js/vendor.js'], ['vendor'])
  gulp.watch(['./public/css/**/*.scss'], ['transpileSass'])
  gulp.start('watchSass')
})

/* KTH Style specific tasks */

const distRootFolderName = 'build'

gulp.task('dist', ['cleanDist'], () => {
  return gulp.start('createDist')
})

gulp.task('cleanDist', function () {
  return del([`./${distRootFolderName}/**/*.*`])
})

const cssImporter = require('node-sass-css-importer')({
    import_paths: ['public/fonts/fontello/css'] 
 });

gulp.task('createDist', ['distFonts', 'distImagesAndIcons'], function () {
  return mergeStream(
    gulp.src('public/sass/kth-bootstrap.scss')
      .pipe($.plumber())
      .pipe($.sourcemaps.init())
      .pipe($.sass({includePaths: ['node_modules/bootstrap/scss', 'public/sass'], importer: [cssImporter]}).on('error', $.sass.logError))
      .pipe($.autoprefixer({browsers: ['last 4 versions']}))
      .pipe(gulp.dest(`${distRootFolderName}/css`))
      .pipe($.rename({ suffix: '.min' }))
      .pipe($.minifyCss())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(`${distRootFolderName}/css`))
    ,
    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
      .pipe(gulp.dest(`${distRootFolderName}/js`))
    )
})

gulp.task('distFonts', function () {
  return mergeStream(
    gulp.src('public/fonts/fontello/font/*.*')
      .pipe(gulp.dest(`./${distRootFolderName}/font`))
  )
})

gulp.task('distImagesAndIcons', function () {
  return gulp.src('public/img/**/*.*')
    .pipe(gulp.dest(`./${distRootFolderName}/img`))
})

// Listen for changes and re-dist
gulp.task('watchSass', function (done) {
  const NODE_DEV = 'development'
  const env = process.env.NODE_ENV || NODE_DEV
  if (env === NODE_DEV || env === 'dev') {
    return gulp.watch(['public/sass/**/*.scss', 'public/css/**/*.scss', 'public/fonts/**/*.*'], ['dist'], done())
  } else {
    done()
  }
})
