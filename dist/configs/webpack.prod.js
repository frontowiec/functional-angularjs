/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
var conf = require('./webpack.common');
var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: conf.entry,
    output: {
        filename: 'bundle.js',
        path: path.resolve('./', conf.DIR.BUILD)
    },
    module: conf.module,
    plugins: [
        new UglifyJSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
        new HtmlWebpackPlugin({ template: conf.DIR.SRC + '/index.html' })
    ],
    resolve: conf.resolve,
    devtool: 'inline-source-map'
};
//# sourceMappingURL=webpack.prod.js.map