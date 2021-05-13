const Path = require('path');
const DotEnvPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'browser',
    
    entry: './index.js',
    output: {
        path: Path.resolve(__dirname, './dist'),
        filename: 'fundamentals-bundle.js'
    },

    devtool: 'source-map',
    
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },

    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: [Path.resolve(__dirname, 'tests')],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new DotEnvPlugin({
            path : Path.resolve(__dirname, '.env.dev')
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}