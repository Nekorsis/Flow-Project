const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const poststylus = require('poststylus');

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
		extensions: ['', '.js', '.jsx', '.styl', '.css']
	},
	devtool: 'eval',
	module: {
		loaders: [
			{test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{test: /index\.html$/, loader: 'file-loader', query: {name: 'index.html'}},
			{test: /\.css$/, loader: 'style!css!postcss', exclude: /node_modules/ },
			{test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/ }
		]
	},
	plugins: [
		new ExtractTextPlugin('app.css', {allChunks: true})
	],
	stylus: {
		use: [poststylus(['postcss-short', 'postcss-sorting', 'postcss-cssnext'])]
	}
};
