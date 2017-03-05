var path = require('path');
var webpack = require('webpack');
//打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// 给css3样式加前缀
var autoprefixer = require('autoprefixer');
var precss = require('precss');
// 自动生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独文件中
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var pkg = require('./package.json');
// 文档声明格式
var banner = pkg.name + pkg.description + 'Author:' + pkg.author + 'Version: v' + pkg.version + 'Url:' + pkg.homepage + 'License(s):' + pkg.license;
// es6转换es5问题
var babelpolyfill = require("babel-polyfill");
// 提取公共脚本
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
console.log(__dirname);


// 生成的文件路径相对于输出的路径
module.exports = {
   context:__dirname,
    entry: ['webpack/hot/dev-server.js', 'webpack-dev-server/client?http://localhost:8080','./src/js/react.js'],
    //打包输出的文件
    output: {
        path: __dirname,
        filename: "dist/js/bundle.js"
    },
    // 加载器
    module: {
         preLoaders: [
            // Javascript
            { test: /\.jsx?$/, 
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                loaders: ['babel-loader','eslint-loader']
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader','less-loader')
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                query:{
                    limit:'8192',
                    name:'./dist/img/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                query:{
                    name:'./dist/fonts/[name].[ext]'
                }
            }
        ]
    },
    eslint: {
        failOnWarning: false,
        failOnError: true
    },
    // 省略文件类型
    // 模块的简写
    resolve: {
        // 注意需要加  .jsx
        extensions: ['', '.js', '.jsx', '.json', '.css','.less']
    },
    //源代码
    devtool: 'source-map',
    // 配置插件
    plugins: [
        //自动生成html
        new HtmlWebpackPlugin({
            // 生成的html路径
            filename: 'dist/html/main.html',
            //html模板路径,根据src源代码生成的html     
            template: 'src/html/main.html',
            inject: true, //允许插件修改哪些内容，包括head与body             
            hash: true, //为静态资源生成hash值             
            minify: { //压缩HTML文件               
                removeComments: true, //移除HTML中的注释 
                collapseWhitespace: false //删除空白符与换行符 
            }
        }),
        //提取css文件 
        new ExtractTextPlugin("dist/css/style.css"),
        //打开浏览器插件 
        new OpenBrowserPlugin({
            url: 'http://localhost:8080/dist/html/main.html'
        }),
        //给打包后的文档头部添加声明
        new webpack.BannerPlugin(banner),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        //提取公用部分
        new webpack.optimize.CommonsChunkPlugin('dist/js/common.js')
    ],
    postcss: function () {
        return [precss, autoprefixer];
    }
}



