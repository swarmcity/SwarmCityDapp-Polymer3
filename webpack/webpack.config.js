const path = require('path');

module.exports = {
    entry: {
        bs58: './webpack/bs58.js',
        ethjs: './webpack/ethjs.js',
        ipfsapi: './webpack/ipfsapi.js',
        redux: './webpack/redux.js',
        reduxSaga: './webpack/reduxSaga.js',
        web3: './webpack/web3.js',
    },
    output: {
        path: path.resolve(__dirname, '../src/libraries/'),
        library: 'webapck',
        filename: '[name].webpack.js',
        libraryTarget: 'umd'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: 1
                }
            }
        }
    },
    target: 'web'
}