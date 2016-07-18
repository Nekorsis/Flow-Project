const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		js: './app/index.js',
		html: './app/index.html'
	},
	output: {
		path: './build/',
		filename: 'js/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'eval',
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{test: /index\.html$/, loader: 'file-loader', query: {name: 'index.html'}}
		]
	}
};
