const gulp = require('gulp');

const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

function build() {
  return gulp
    .src('src/*.css')
    .pipe(concat('index.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'));
}

function watch() {
  gulp.watch('src/*.css', build);
}
gulp.task('watch', watch);
gulp.task('build', build);
