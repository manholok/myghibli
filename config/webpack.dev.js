const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = function (options) {

    return webpackMerge(commonConfig({env: ENV}), {
        devtool: 'source-map'
    });
};