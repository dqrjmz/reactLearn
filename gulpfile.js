var gulp = require("gulp");
var webpack = require("webpack-stream");
var browserSync = require('browser-sync').create();

// gulp.task("build", function() {
//     return gulp.src("src/js/main.js")
//         .pipe(webpack(require("./webpack.config.js")))
//         .pipe(gulp.dest("./lib"))
// });


gulp.task('browser-sync',function () {
    var files = [
        '**/*.html',
        '**/*.css',
        '**/*.js'
    ];
//代理模式（本地服务器）
    browserSync.init(files,{
        proxy: 'http://10.101.28.76:91/html/index.html?_ijt=5d9fjooo2tdvvf1uh6tb8qmlma#/index',  //此处根据项目实际目录填写
    });
//本地静态文件
//     browserSync.init(files, {
//         server: {
//             baseDir: './src'   //该路径到html的文件夹目录
//         }
//     });
});