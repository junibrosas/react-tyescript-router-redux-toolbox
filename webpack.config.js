const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss", ".jsx", ".css"],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {   test: /\.tsx?$/, 
                loaders: ["ts-loader", "source-map-loader"],
            },
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel'
            },
            {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "theme/_config.scss";',
        includePaths: [path.resolve(__dirname, './src')]
    },
    plugins: [
        new ExtractTextPlugin('./dist/bundle.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin()
    ]
};