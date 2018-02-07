var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var babelify = require("babelify");

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/haiku-interface.js'] })
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});
