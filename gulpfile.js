var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function() {
  // place code for your default task here
 gulp.src('index.html')
  .pipe(inject(gulp.src(['./stylesheet/*.css',
   './node_modules/jquery/dist/*.min.js',
    './node_modules/bootstrap/dist/css/*.min.css',
    './node_modules/bootstrap/dist/js/*bootstrap.min.js',
   './app/*.js'], {read: false}), {relative: true}))
  .pipe(gulp.dest(''));
});