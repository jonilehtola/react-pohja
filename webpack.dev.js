const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { static: path.join(__dirname, "src"), 
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      
  },
  proxy: {
    '/api': {
       target: {
          host: "localhost",
          protocol: 'http:',
          port: 8080
       },
/*       pathRewrite: {
          '^/api': '/api'
       }*/
    }
 },
  port: 8081,
},
  stats: {warnings: false}
});