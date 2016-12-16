const gulp = require('gulp')
const commonsGulp = require('kth-node-build-commons/gulpfile')
const del = require('del')
const gulpLoadPlugins = require('gulp-load-plugins')
const $ = gulpLoadPlugins()

commonsGulp.setDirname(__dirname)
commonsGulp.setStartpath('/style')

gulp.tasks = commonsGulp.gulp.tasks

gulp.task('default', ['cleanDist'], () => {
  gulp.start('dist')
})

gulp.task('cleanDist', function () {
  return del(['./dist/**/*.*'])
})

gulp.task('dist', ['distFonts', 'distImagesAndIcons'], function () {
  gulp.src('server/sass/kth-bootstrap.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({includePaths: ['node_modules/bootstrap/scss', 'server/sass']}).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 4 versions']}))
    .pipe(gulp.dest('dist/css'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))

// TODO VARFÖR SKAPAS KTH STYLE IMAGES I ROTEN PÅ DIST!?!?!?!

  gulp.src('server/sass/kth-style.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({includePaths: ['server/sass']}).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 4 versions']}))
    .pipe(gulp.dest('dist/css'))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.minifyCss())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))

  gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('dist/js'))

  // TODO Handle more icons? Fontello?
})

gulp.task('distFonts', function () {
  return gulp.src('./fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('distImagesAndIcons', function () {
  return gulp.src('./img/**/*.*')
    .pipe(gulp.dest('./dist/img'))
})

// Listen for changes and rebuild css
gulp.task('watch', function () {
  gulp.watch('server/sass/**/*.scss', ['default'])
})
