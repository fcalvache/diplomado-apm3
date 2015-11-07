var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('js-min', function(){
    gulp.src(['js/app.js', 'js/lab1a.js', 'js/lab1b.js',  'js/lab1c.js'])
        .pipe(concat('lab1abc.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});

gulp.task('angularconcat', function(){
    gulp.src(['bower_components/angular/angular.min.js', 'bower_components/angular-route/angular-route.min.js'])
        .pipe(concat('labangular.min.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('build/'))
});
var htmlmin = require('gulp-htmlmin');
 
gulp.task('html-min', function() {
  return gulp.src(['index.html','views/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('disthtml'))
});

gulp.task('default', ['html-min', 'js-min', 'angularconcat'], function(){
    
});
