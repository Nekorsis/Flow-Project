const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		extensions: ['', '.js', '.jsx', '.styl']
	},
	devtool: 'eval',
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{test: /\.css?$/, loader: ExtractTextPlugin.extract('style-loader!css-loader')},
			{test: /\.styl?$/, loader: ExtractTextPlugin.extract('style-loader!css-loader!stylus-loader')},
			{test: /index\.html$/, loader: 'file-loader', query: {name: 'index.html'}}
		]
	},
	plugins: [
		new ExtractTextPlugin('app.css', {allChunks: true})
	]
};
