const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    // Webpack configuration goes here
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [

            // First Rule
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Second Rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,                    // made scss
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/assets/images',
                            publicPath: 'src/assets/images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'src/assets/styles/styles.[hash].css',
            allChunks: true
        }),
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        contentBase: './',
        open: true,
        hot: true
    }
};