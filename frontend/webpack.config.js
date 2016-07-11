/* global module, __dirname */

module.exports = {
    entry: "./src/js/main.js",
    // entry: {
    //     orderrequest_main: "./src/js/"
    // },
    output: {
        path: __dirname + '/../public/dist',
        filename: "main.bundle.js"
    },
    //module: {
    //    loaders: [
    //    { test: /\.css$/, loader: "style!css" }
    //    ]
    //}
};
