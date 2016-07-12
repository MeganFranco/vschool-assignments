var HTMLWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
    }),

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/dist',
        //dist is a common folder name for production
        filename: "index_bundle.js"

    },
    module: {
        //what to use to compile our code
        loaders: [{
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'bable-loader',
            }]
    },
    
    plugins: [HTMLWebpackPluginConfig]
}