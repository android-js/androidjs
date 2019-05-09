const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');
const webpack_rules = [];
const webpackOption = [{
    entry: "./src/webview/front/front.ts",
    // externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "dist", "webview", "front"),
        filename: "front.js",
        library:"front",
        libraryTarget:"var"
    },
    module: {
        rules: webpack_rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
},
{
    entry: "./src/webview/androidjs/androidjs.ts",
    // externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "dist", "webview", "androidjs"),
        filename: "androidjs.js",
        library:"app",
        libraryTarget:"var"
    },
    module: {
        rules: webpack_rules
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
}];

let tsloader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/
}
let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};
webpack_rules.push(tsloader);
module.exports = webpackOption;