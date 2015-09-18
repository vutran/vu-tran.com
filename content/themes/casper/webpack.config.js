var path = require('path');
var webpack = require('webpack');

// Import components
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        path.join(__dirname, './assets/js/webpack.entry.js')
    ],
    output: {
        path: __dirname + '/assets/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(ttf|eot|woff)(\?.*)?$/,
                loaders: ['url']
            },
            {
                test: /\.(svg)(\?.*)?$/,
                loaders: ['url', 'svgo']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    eslint: {
        parser: 'babel-eslint'
    },
    postcss: function() {
        return [autoprefixer];
    }
};
