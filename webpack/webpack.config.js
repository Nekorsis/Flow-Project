const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: {
		js: './app/index.js',
	},
	output: {
		path: './build/',
		filename: 'js/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.styl', '.css']
	},
	devtool: 'eval',
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{test: /\.css$/, loader: 'style!css!postcss', exclude: /node_modules/ },
			{test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/ }
		]
	},
	plugins: [
	],
	stylus: {
	}
};
