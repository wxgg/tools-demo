const extract_character = require('extract-character')

function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // 在生成文件中，创建一个头部字符串：
    var filelist = 'In this build:\n\n';

    // 遍历所有编译过的资源文件，
    // 对于每个文件名称，都添加一行内容。
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
      console.log('wang',filename)
    }
    const aa = extract_character.track(compilation.assets['test.js'].children[0]._value, {
    //多语文件输出路径
      "output": "./lang",
    //多语文件名称
      "fileName": "lang.json",
    //原始多语文件
      "local": "",
    })
    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['test.js'] = {
      source: function() {
        
        return aa;
      },
      size: function() {
        return aa.length;
      }
    };
    // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;