const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                exclude: /node_modules/,
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
        })
    ],

    devServer: {
        stats: 'errors-only'
    }
};
