const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const FileListPlugin = require('./src/webpack/index.js');

module.exports = {
	mode: "development",
	entry: "./src/thunder-page/index.js",
	// entry: './test/index.js',
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	devServer: {
		contentBase: path.join(__dirname, "./src"),
		publicPath: "/",
		host: "0.0.0.0",
		port: "3000",
		overlay: true, // 浏览器页面上显示错误
		hot: true, // 开启热更新
		proxy: {
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader','postcss-loader', 'less-loader']
			}, {
				test: /\.less$/,
				use: ['style-loader', 'css-loader','postcss-loader', 'less-loader']
			}, {
				test: /\.css$/,
				use:  ['style-loader', 'css-loader']
			}
		],
	},
	plugins: [
		// new FileListPlugin()
		new HtmlWebpackPlugin({
			//预览时使用
			template: path.resolve(__dirname, "./template", "index.html"), //模板
			filename: "index.html",
			// chunks: ["index"],
			inject: true, //允许插件修改哪些内容，包括head与body
			hash: true, //是否添加hash值
			minify: {
				//压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true, //删除空白符与换行符
			},
			chunksSortMode: "none", //如果使用webpack4将该配置项设置为'none'
		}),
	],
};
