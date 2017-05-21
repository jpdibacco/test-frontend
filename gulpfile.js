var gulp = require('gulp'),
stylus = require('gulp-stylus'),
plumber = require('gulp-plumber'),
spritesmith = require('gulp.spritesmith'),
pleeease = require('gulp-pleeease'),
minifyCss = require('gulp-minify-css'),
rename = require('gulp-rename'),
jade = require('gulp-jade'),
connect = require('gulp-connect'),
util = require('gulp-util'),
filter = require('gulp-filter'),
bower = require('gulp-bower'),
mainBower = require('main-bower-files'),
uglify = require('gulp-uglify'),
browserify = require('browserify'),
debowerify = require('debowerify'),
vueify = require('vueify'),
source = require('vinyl-source-stream'),
lost    = require('lost-stylus'),
postcss = require('poststylus');

gulp.task('stylus', function() {
  return gulp.src(['./src/styles/stylus/*.styl']).pipe(stylus({use: [postcss(['lost'])]})).pipe(pleeease()).pipe(minifyCss({
    keepSpecialComments: 0
  })).pipe(rename({
    extname: '.min.css'
  })).pipe(gulp.dest('./public/css/')).pipe(connect.reload());
});

gulp.task('lib-css', function() {
  return gulp.src(['./src/styles/*.css', './src/lib/*.css']).pipe(minifyCss({
    keepSpecialComments: 0
  })).pipe(rename({
    extname: '.min.css'
  })).pipe(gulp.dest('./public/styles'));
});

gulp.task('fonts', function() {
  return gulp.src(['./src/fonts/*.eot', './src/fonts/*.svg', './src/fonts/*.tiff', './src/fonts/*.ttf', './src/fonts/*.woff', './src/fonts/*.woff2']).pipe(gulp.dest('./public/fonts'));
});

gulp.task('sprite', function() {
  var spriteData;
  spriteData = gulp.src(['./src/assets/sprites/*.*']).pipe(plumber()).pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '/images/sprite.png',
    cssName: 'sprites.styl',
    cssFormat: 'stylus',
    padding: 10
  }));
  spriteData.img.pipe(gulp.dest('./public/images/'));
  return spriteData.css.pipe(gulp.dest('./src/styles/stylus/_mixins/'));
});

gulp.task('images', function() {
  return gulp.src(['./src/assets/*.*', './src/assets/samples/*.*', './src/assets/components/*.*', './src/design/assets/*.*']).pipe(gulp.dest('./public/images'));
});

gulp.task('jade', function() {
  return gulp.src(['./src/jade/!(_)*.jade']).pipe(jade({
    pretty: true,
    basedir: '.src/jade'
  })).pipe(gulp.dest('./public')).pipe(connect.reload());
});

gulp.task('script', function() {
  return browserify({
    entries: ['./src/scripts/app.js'],
    extensions: ['.js']
  }).transform('debowerify').transform('vueify').bundle().pipe(source('app.js')).pipe(gulp.dest("./public/scripts/")).pipe(connect.reload());
});

gulp.task('bower', function() {
  return gulp.src(mainBower()).pipe(gulp.dest("./src/lib/"));
});

gulp.task('connect', function() {
  return connect.server({
    root: 'public',
    port: 8000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch("./src/styles/stylus/**/*.styl", ['stylus']);
  gulp.watch("./src/jade/**/*.jade", ['jade']);
  return gulp.watch("./src/scripts/**/*.*", ['script']);
});

gulp.task('default', ['bower', 'sprite', 'images', 'fonts', 'lib-css', 'stylus', 'jade', 'script', 'connect', 'watch']);
