/*
 * @Author: your name
 * @Date: 2020-08-24 15:56:39
 * @LastEditTime: 2020-09-12 16:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-demo\webpack.config1.js
 */
const path = require('path');
module.exports = {
  // mode: 'development',
  entry: './test/test.js',
  devtool: 'source-map',
  output: {
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'output')
  }
};