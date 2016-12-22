const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create(); //浏览器异步刷新

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['stage-3']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// 合并并压缩css
gulp.task('convertCSS', function(){
  return gulp.src('src/css/*.css')
    .pipe(concat('index.css'))
    .pipe(cssnano())
    .pipe(rename(function(path){
      path.basename += '.min';
    }))
    .pipe(gulp.dest('dist/css'));
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('src/css/*.css', ['convertCSS']);
  gulp.watch('src/js/*.js', ['convertJS', 'browserify']);
})

// browserify
gulp.task("browserify", function () {
    var b = browserify({
        entries: "dist/js/one.js"
    });

    return b.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist/js"));
});

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', function() {

    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/html/*.html").on('change', browserSync.reload);
});


// 开始执行任务
gulp.task('start', ['convertJS', 'convertCSS', 'browserify', 'watch','serve']);