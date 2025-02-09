const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (_env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            filename: 'main.bundle.js',
            path: path.join(__dirname, 'dist'),
            clean: true,
            publicPath: isProduction ? '/weather/' : '/',
        },
        module: {
            rules: [
            {
                test: /\.css$/i,
                use: [ 
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'
                ],
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Enables ES6+ syntax
                    },
                },
            },            
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            ],
        },
        resolve: {
            extensions: ['.js'], // Ensures Webpack recognizes JS imports
        },        
        devtool: isProduction ? false : 'source-map',
        devServer: {
            static: path.join(__dirname, 'dist'),
            port: 8080,
            compress: true,
            watchFiles: ['src/**/*.html'],
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'src/assets', to: 'assets' },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ].filter(Boolean),
    };
};
