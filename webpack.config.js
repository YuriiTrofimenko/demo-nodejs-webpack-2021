var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

module.exports = {
  entry: {
    app: "./src/scripts/app.js",
  },//path relative to this file
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "[name].bundle.js",
  },
  watch: true,
  resolve: { extensions: [".js", ".ts"] },
  devServer: {
    contentBase: path.join(__dirname, "../dist/"),
    port: 9000
  },
	plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'My Awesome application from params',
        myPageHeader: 'Hello World from param',
        template: './src/index.html',
        filename: 'index.html'
    })
  ]
}
