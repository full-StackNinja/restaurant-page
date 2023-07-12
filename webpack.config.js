const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    // devServer:{
    //     static: './dist',
    //     hot: true
    // },
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}