const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const FileListPlugin = require('./src/index.js');

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      // new FileListPlugin({
      //   test: /\.js(\?.*)?$/i,
      // }),
    ],
  },
  // plugins:[
  //   new FileListPlugin()
  // ]
};