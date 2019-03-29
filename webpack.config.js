const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:'./dist/client/index.js',
    output: {
        path:path.join(__dirname,'/dist/client'),
        filename:'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions: ['.ts','.tsx','.json','.js']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.(ts|tsx)$/,
                exclude:/node_modules/,
                use:['awesome-typescript-loader']
            }
        ]
    },
    devServer:{
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./dist/client/index.html'
        })
    ]
}