/*var gulp = require('gulp');
var uglify = require('gulp-uglify');

console.log(uglify)

gulp.task('step1', function() {
    console.log('step1');
});

gulp.task('step2', ["step1"],function() {
    console.log('step2');
});
*/
/*
gulp.task('default', ["step1", "step2"], function() {
    console.log('default');
});
*/
/*
gulp.task('allTasks', ["step1", "step2"])


gulp.task('default', function() {
    gulp.src('src/*.js')
        .pipe( gulp.dest('dest1') );
});


gulp.task('minify', function() {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

*/

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});





