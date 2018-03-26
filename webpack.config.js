const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "./scss"),
    entry: "./example-styles.scss",
    output: {
        path: path.resolve(__dirname),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: [path.resolve(__dirname, "src")],
                options: {
                    presets: ["env"]
                }
            },
            {
                test: /\.scss$/,
                // use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
                use: ExtractTextPlugin.extract({use: ["css-loader", "postcss-loader", "sass-loader"]})
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: "styles.css"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        hot: true,
        port: 9000
    }
};