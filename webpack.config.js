const path = require('path');
const yargs = require('yargs');

var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH_SRC = './src';
const PATH_DIST = './dist';

const ENVIRONMENT = yargs.argv['env'];

let config;
let defineConfigKeys = {};

//Import class configuration
switch(ENVIRONMENT){
  case 'dev':
    config = require('./config/config.dev');
    break;
  default:
    throw new Error('SELECT CORRECT ENVIRONMENT!!')
}

for (let i in config) {
  if (config[i].length || typeof config[i] === 'object') {
    defineConfigKeys[i] = JSON.stringify(config[i]);
  } else {
    defineConfigKeys[i] = config[i];
  }
}
const DefinePlugin = new webpack.DefinePlugin({
  _CONF: defineConfigKeys
});

HtmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'My App Angular - Fabio Marcoccia',
  template: path.resolve(PATH_SRC, './index.hbs'),
  dist: path.resolve(PATH_DIST, './index-[hash].js'),
  htmlBase: '/'
});
CleanWebpackPlugin = new CleanWebpackPlugin(['dist']);

var UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  beautify: true,
  mangle: false,
  compress: true
});

//Workaround for https://github.com/angular/angular/issues/11580
ContextReplacementPlugin = new webpack.ContextReplacementPlugin(
  /angular(\\|\/)core(\\|\/)(@angular|esm5)/, path.resolve(PATH_SRC)
);

ExtractTextPlugin = new ExtractTextPlugin({
  filename: "[name].[hash].css"
});

CommonsChunkPlugin  = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  minChunks: (module) => module.context && /node_modules/.test(module.context)
});

CopyWebpackPlugin = new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]);

module.exports = {
  resolve:{
    modules: [path.resolve(PATH_SRC), "node_modules"],
    extensions: ['.js' ,'.ts']
  },
  entry: path.resolve(PATH_SRC, './appModule/main.ts'),
  output: {
    path: path.resolve(PATH_DIST),
    filename: '[name].[hash].js',
    chunkFilename: '[name]-chunk.js'
  },
  module: {
    rules: [
      { test: /\.hbs$/,  use: 'handlebars-loader'},
      { test: /\.ts$/, enforce: "post",use: ['awesome-typescript-loader', 'angular-router-loader', 'angular2-template-loader'] },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{loader: "css-loader"}, {loader: "sass-loader"}]
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins:[
    CleanWebpackPlugin,
    UglifyJsPlugin,
    HtmlWebpackPlugin,
    ExtractTextPlugin,
    ContextReplacementPlugin,
    CommonsChunkPlugin,
    DefinePlugin,
    CopyWebpackPlugin
  ],
  devServer: {
    contentBase: path.resolve(PATH_DIST),
    compress: true,
    port: 9000
  },
  devtool: ENVIRONMENT !== 'prod' ? "source-map" : undefined
};