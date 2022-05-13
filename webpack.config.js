const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    name: 'browser',
    mode: 'development',
    //entry: './src/index.js',
    entry: ["regenerator-runtime/runtime.js", './src/index.js'],
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    experiments: {
        topLevelAwait: true
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource', },
            { test: /\.csv$/, loader: 'csv-loader', options: {
                dynamicTyping: true,
                header: true,
                skipEmptyLines: true
                }
            },
            { test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-syntax-top-level-await'],
                    }
                }
            } ]
    },
    plugins: [HtmlWebpackPluginConfig]
}