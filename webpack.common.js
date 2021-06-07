const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    target: 'es5',

    output: {
        clean: true,
        filename: '[name]-[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.svg/,
                type: 'asset/source'
            }
        ]
    },

    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: 'head',
            hash: true
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, 'assets', 'favicon.png'),
            prefix: 'favicon/[contenthash:20]/'
        })
    ],

    devServer: {
        stats: 'errors-only'
    }
};
