const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
        style: './style/index.ts',
        index: './src/index.ts',
        eclipse: './src/eclipse/index.ts'
    },
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
                test: /\.svg/i,
                type: 'asset/source'
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
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
            filename: 'index.html',
            template: 'src/index.ejs',
            chunks: ['style', 'index'],
            inject: 'head',
            hash: true
        }),
        new HtmlWebpackPlugin({
            filename: 'eclipse.html',
            template: 'src/eclipse/index.ejs',
            chunks: ['style', 'eclipse'],
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
