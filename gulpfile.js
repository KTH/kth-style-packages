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
  del(['./dist/**/*.*'])
})

gulp.task('dist', function () {
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
})

// Listen for changes and rebuild css
gulp.task('watch', function () {
  gulp.watch('server/sass/**/*.scss', ['default'])
})
