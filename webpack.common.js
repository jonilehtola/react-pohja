const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "pohja.js"),
    output: { 
        path: path.join(__dirname, "build"), 
        filename: "pohja.bundle.js" ,
        library: {
            type: 'var',
            name: 'Pohja',
        },
    
    },
   /* mode: process.env.NODE_ENV || "development",*/
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
   /* devServer: { contentBase: path.join(__dirname, "src"), allowedHosts: ['.noedu.fi'] },*/
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            }, 
            { test: /\.html$/, loader: 'html-loader', options: {minimize: false} },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: path.join(__dirname, "src", "index.html"),
        })
    ],
/*    devtool: 'inline-source-map'*/
};