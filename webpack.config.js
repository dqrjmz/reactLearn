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
// 打印日志
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
// 使得css module中支持变量
var values=require('postcss-modules-values');

// 生成的文件路径相对于输出的路径
module.exports = {
    context: __dirname,
    //entry: ['webpack/hot/dev-server.js', 'webpack-dev-server/client?http://localhost:8080','./src/js/react.js'],
    entry: {
        index: './src/js/react.js',
        vendor: [
            'react',
            'react-dom'
        ]
    },
    //打包输出的文件
    output: {
        path: __dirname,
        //打包后的文件访问目录
        // publicPath: '/',
        filename: "dist/js/[name].js"
    },
    // 加载器
    module: {
        preLoaders: [{
                test: /\.jsx?$/,
                loader: 'eslint'
            }
        ],
        loaders: [{
            test: /\.js[x]?$/,
            loaders: ['babel-loader', 'eslint-loader']
        }, {
            test: /\.(css|less)$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]&sourceMap=true','postcss-loader')
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader',
            query: {
                limit: '8192',
                name: './dist/img/[name].[ext]'
            }
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            query: {
                name: './dist/fonts/[name].[ext]'
            }
        }]
    },
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
            url: 'http://localhost:10000/dist/html/main.html'
        }),
        // 打印日志
        new BellOnBundlerErrorPlugin(),
        //给打包后的文档头部添加声明
        new webpack.BannerPlugin(banner),
        // 热替换
        new webpack.HotModuleReplacementPlugin(),
        //提取公用部分
        new webpack.optimize.CommonsChunkPlugin('vendor', 'dist/js/vendor.js'),
        //提供全局的变量，在模块中使用无需用require引入
        new webpack.ProvidePlugin({page: "page"}),
    ],
    // 省略文件类型
    // 模块的简写
    resolve: {
        // 注意需要加  .jsx
        extensions: ['', '.js', '.jsx', '.json', '.css', '.less'],
        alias:{
            page:'./src/lib/page.js'
        }
    },
    //源代码
    devtool: 'source-map',
    // js代码检测
    eslint: {
        configFile: './.eslintrc',
        failOnWarning: false,
        failOnError: true
    },
    // css文件处理
    postcss: [
        values,
        precss, 
        autoprefixer,
    ],
    //服务
    devServer: {
        hot: true, //自动刷新
        inline: true, //模块热更新
        contentBase: './', //服务的根路径
        historyApiFallback: true, //启用对历史回退的支持
        host: 'localhost',
        // open:true,
        port: 10000
    }
}
