const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

//webpack:
//npm i -D webpack webpack-cli

/*NPM*/
//js es6 dependency
/*npm install --save-dev babel-core babel-loader babel-preset-env*/

//add .babelrc file; {"presets": ["env"]}

//css autoprefixer:
/*npm i -D postcss-loader autoprefixer*/

//plugins:
//npm i -D extract-text-webpack-plugin@next
//npm i -D copy-webpack-plugin

module.exports = {
  entry: [
		'./src/js/main.js',
		'./src/scss/styles.scss'
	],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../img/',
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /*new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),*/
    new CopyWebpackPlugin([{ from: './src/html', to: './' }]),
    new ExtractTextPlugin({
      filename: 'css/styles.min.css',
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [autoprefixer]
      }
    })
  ]
};
