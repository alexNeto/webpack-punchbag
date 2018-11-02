// const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniHtmlWebpackPlugin = require("mini-html-webpack-plugin")
const minify = require('html-minifier').minify;

module.exports = {
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: "webpack demo"
            },
            template: context =>
                minify(MiniHtmlWebpackPlugin.defaultTemplate(context))
        }),
        // new HtmlWebpackPlugin({
        //     title: "Webpack demo",
        // }),
    ],
};