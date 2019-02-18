'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify-es').default;
var inlinesource = require('gulp-inline-source');
var gzip = require('gulp-gzip');
const urlPrefixer = require('gulp-url-prefixer');
var gutil = require('gulp-util');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src('./src/styles.css')
      // Auto-prefix css styles for cross browser compatibility
      .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
      // Minify the file
      .pipe(csso())
      // Output
      .pipe(gulp.dest('./build'))
  });

  gulp.task('scripts', function () {
    return gulp.src('./build/dash.js')
      .pipe(gzip())
      .pipe(gulp.dest('./build'))
  });

  gulp.task('pages', function() {
    return gulp.src(['./src/index.htm'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(gzip())
      .pipe(gulp.dest('./build/dev'));
  });

gulp.task('pagesinline', function() {
    return gulp.src(['./src/index.htm'])
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
      }))
      .pipe(inlinesource())
      .pipe(gzip())
      .pipe(gulp.dest('./build'));
  });

// Gulp task to minify all files
gulp.task('default', function () {
  runSequence(
    'styles',
    'scripts',
    'pages',
    'pagesinline'
  );
});