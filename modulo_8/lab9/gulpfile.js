var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


gulp.task('angularconcat', function(){
    gulp.src(['bower_components/angular/angular.min.js', 'bower_components/ngCordova/dist/ng-cordova.min.js'])
        .pipe(concat('angular-ngcordova.min.js'))
        .pipe(gulp.dest('www/js/'))
});
