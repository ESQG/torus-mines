var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '../src/index.js')
  ],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/build',
    historyApiFallback: true
  }
}
