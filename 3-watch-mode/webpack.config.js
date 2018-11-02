const path = require("path");
const webpack = require("webpack");

module.exports = {
    devServer: {
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        }
    },
    plugins: [
        // Ignore node_modules so CPU usage with poll
        // Watching drops significantly.
        new webpack.WatchIgnorePlugin([
            path.join(__dirname, "node_modules")
        ])
    ]
};