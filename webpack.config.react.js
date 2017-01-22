var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './src/js/react.jsx',
    output: {
        path: path.join(__dirname, './dist/js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        // 编译es6/jsx文件使得浏览器可以支持
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel'] }
        ]
    }
};