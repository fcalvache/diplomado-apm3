var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    concatCss = require('gulp-concat-css');

gulp.task('concat-css', function(){
    return gulp.src(['css/styles.css'])
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest('min/'));
});

gulp.task('minify-css', ['concat-css'], function(){
  return gulp.src('min/styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('concat-files', function(){
    gulp.src('js/*.js')
        .pipe(concat('lab3.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});
