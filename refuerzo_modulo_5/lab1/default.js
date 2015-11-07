var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

    gulp.task('minificarjs', function(){
    gulp.src(['js/app.js', 'js/lab1a.js', 'js/lab1b.js',  'js/lab1c.js'])
        .pipe(concat('lab1.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
});

var htmlmin = require('gulp-htmlmin');
 
gulp.task('minifyhtml', function() {
  return gulp.src(['index.html', 'views/*.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('disthtml'))
});

gulp.task('default', ['minifyhtml', 'minificarjs'], function(){
	
});
