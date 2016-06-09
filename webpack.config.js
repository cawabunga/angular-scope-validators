'use strict';
const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');
const libraryName = pkg.name;

module.exports = {
  entry: {
    [libraryName]: `${__dirname}/index.js`
  },
  output: {
    filename: 'dist/[name].js',
    library: libraryName,
    libraryTarget: 'umd'
  },
  externals: [{
    angular: true
  }],
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015'
    }]
  }
};