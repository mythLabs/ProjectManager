const path = require('path');
const cleanPlug = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: [/node_modules/]
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new cleanPlug.CleanWebpackPlugin()
    ]
};