var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('js', function() {
    var bundler = browserify({
        entries: ['./src/app.jsx'], // Only need initial file, browserify finds the deps
        extensions: ['.js', '.jsx'],
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });

    var watcher  = watchify(bundler);

    return watcher
      // When any files update
      .on('update', function () {
          var updateStart = Date.now();

          console.log('Updating!');

          // Create new bundle that uses the cache for high performance
          watcher
            .bundle()
            .pipe(source('bundle-app.js'))
            // This is where you add uglifying etc.
            .pipe(gulp.dest('./dist/js/'));

          console.log('Updated!', (Date.now() - updateStart) + 'ms');
      })
      // Create the initial bundle when starting the task
      .bundle()
      .pipe(source('bundle-app.js'))
      .pipe(gulp.dest('./dist/js/'));
});