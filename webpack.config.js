/**
 *   开启一个服务器  
 * 'webpack-dev-server/client?http://localhost:8080'
 *   自动打开浏览器
 * new OpenBrowserPlugin({
            url: 'http://localhost:8080/html/main.html'
    })
 *   在服务器环境下检测文件修改，并实施刷新 
 * 'webpack/hot/dev-server.js'  + new webpack.HotModuleReplacementPlugin()
 * 
 */



// webpack本身的功能
var webpack = require('webpack');
// 路径操作
var path = require('path');
//打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['webpack/hot/dev-server.js', 'webpack-dev-server/client?http://localhost:8080', './src/js/react.jsx'],
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            // 编译es6/jsx文件使得浏览器可以支持
            {
                test: /\.js|jsx$/,
                loaders: ['babel']
            },
            // 让webpack支持加载css样式文件
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            // 内联 base64 URLs, 限定 <=8k 的图片, 其他的用 URL
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    // 配置插件
    plugins: [
        //打开浏览器插件 
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/html/main.html'
        }),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        //自动生成html
        new HtmlWebpackPlugin({
            filename: 'dist/html/main.html'
        })
    ]
};