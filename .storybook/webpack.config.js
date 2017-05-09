// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const webpack      = require('webpack')
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../'),
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              module: true,
              localIdentName: '[local]___[hash:base64:5]'
            },
          },
          {
            loader: 'sass-loader',
            include: path.resolve(__dirname, '../'),
            query: {
                outputStyle: 'expanded',
                sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            include: path.resolve(__dirname, '../'),
            options: {
              plugins: function () {
                return [autoprefixer]
              }
            },
          }
        ]
      },
    ],
  },
};
