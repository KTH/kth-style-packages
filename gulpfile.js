var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var rename = require('gulp-rename')
var del = require('del')
var runSequence = require('run-sequence')

gulp.task('default', function (callback) {
  runSequence(
    'clean',
    'sassify',
    'moveImages',
    'moveCss',
    'moveBootstrapFonts',
    'moveBootstrapCss',
    'moveBootstrapJs',
    'moveJquery',
    callback)
})

gulp.task('clean', function () {
  return del(['./dist', './css/*', './js/*', './fonts/*'])
})

gulp.task('sassify', function () {
  return gulp.src(['./sass/kth-style.scss', './sass/kth-bootstrap-theme.scss'])
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cleanCSS({
      // https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
      // fixme how old IE do we support?
      compatibility: 'ie7'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('moveImages', function () {
  return gulp.src(['./img/**'])
    .pipe(gulp.dest('./dist/img'))
})

gulp.task('moveBootstrapCss', function () {
  return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./css'))
})

gulp.task('moveBootstrapJs', function () {
  return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./js'))
})

gulp.task('moveBootstrapFonts', function () {
  return gulp.src('./node_modules/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('./fonts'))
})

gulp.task('moveJquery', function () {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./js'))
})

gulp.task('moveCss', function () {
  return gulp.src(['./dist/css/*.css'])
    .pipe(gulp.dest('./css'))
})
