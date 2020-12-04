const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // this set context path is app; means the default path is app/
    // context: __dirname + '/app',
    entry: {'app': './index.js'},
    output: {
        path: __dirname + './build',
        filename: './build/[name].js'
    },
    resolve: {
        alias: {
            _component: path.resolve(__dirname, './app/component'),
            _directive: path.resolve(__dirname, './app/directive'),
            _react: path.resolve(__dirname, "./app/react"),
            _provider: path.resolve(__dirname,"./app/provider")
        }
    },
    module:{
        loaders: [
            {
                test: /\.(js|jsx)$/, 
                loader: ['babel-loader'], 
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', "react"]
                }
            },
            {
                test: /\.css$/,
                loaders:['style-loader', 'css-loader']
            },
            {test: /\.html$/, loader: 'html-loader',
            exclude: /node_modules/},
        ]
    },
    plugins:[
        // new OpenBrowserPlugin({url:'http://localhost:8080'}),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
            { 
              hash: true,
              template:'./index.html',
            }
        )
    ]
}
// if(module.hot){
//     module.hot.accept()
// }
