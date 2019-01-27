var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
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
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '..'),
    historyApiFallback: true
  }
}
