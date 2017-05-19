var fs        = require('fs');
var path      = require('path');
var gulp      = require('gulp');
var rename    = require('gulp-rename');
var VueModule = require('gulp-vue-module');
var stylus    = require('gulp-stylus');

gulp.task('vue', function() {
    return gulp.src('./src/**/*.vue')
                .pipe(VueModule({
                    debug : true
                }))
                .pipe(rename({extname : ".js"}))
                .pipe(gulp.dest("./public"));
});
// Options compress
gulp.task('compress', function () {
  return gulp.src('./src/css/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/css/build'));
});
gulp.watch('./src/**/*.vue', function(){

});
gulp.task('default', ['vue']);
