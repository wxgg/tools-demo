# 基础
SourceMap是一种映射关系。当项目运行后，如果出现错误，错误信息只能定位到打包后文件中错误的位置。如果想查看在源文件中错误的位置，则需要使用映射关系，找到对应的位置。
```js
const path = require('path');

module.exports = {
  devtool: 'none', // SourceMap
  entry: './src/index.js',  // 入口文件
  output: {
    filename: 'bundle.js',  // 文件名
    path: path.resolve(__dirname, 'dist')  // 文件夹
  }
}
```
## 参数
### 1、source-map
会生成map格式的文件，里面包含映射关系的代码
```js
devtool: 'source-map',
```
### 2、inline-source-map
不会生成map格式的文件，包含映射关系的代码会放在打包后生成的代码中
```js
devtool: 'inline-source-map',
```
### 3、inline-cheap-source-map
cheap有两种作用：一是将错误只定位到行，不定位到列。二是映射业务代码，不映射loader和第三方库等。
会提升打包构建的速度。
```js
devtool: 'inline-cheap-source-map',
```

### 4、inline-cheap-module-source-map
module会映射loader和第三方库
```js
devtool: 'inline-cheap-module-source-map',
```
### 5、eval
用eval的方式生成映射关系代码，效率和性能最佳。但是当代码复杂时，提示信息可能不精确。
```js
devtool: 'eval',
```
## 推荐方式
- 开发环境
```js
devtool: 'cheap-module-eval-source-map',
```
- 生产环境
```js
devtool: 'cheap-module-source-map',
```
