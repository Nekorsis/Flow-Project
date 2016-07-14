const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: '.app/containers/index.js',
	output: {
		path: './build/',
		filename: 'js/bundle.js'
	},
	devtool: 'eval',
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	}
};
