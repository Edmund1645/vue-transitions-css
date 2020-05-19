const gulp = require('gulp');

const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

gulp.task('minify', () =>
  gulp
    .src('src/*.css')
    .pipe(concat('index.min.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('dist'))
);
