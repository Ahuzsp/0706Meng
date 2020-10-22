# webpack的基本知识

### 1：webpack是用来干嘛的？

项目都需要项目化，模块化，要实现模块化，打包功能，就需要对应的工具。webpack就是目前前端最流行的打包工具。

项目的构建工具，打包工具只有webpack吗？老的工具有Grunt，gulp。



### 2：webpack的基本配置

##### 2.1：配置入口文件 (必须)

```javascript
 entry: {
    // 入口文件路径 
    app: './src/main.js'
 },
```

入口文件程序会在第一时间去读取,然后接着读取所有import的文件以及子文件.从而找出所有项目依赖的文件.



##### 2.2：配置出口文件 (必须)

```javascript
output: {
    // 出口文件路径
    path: config.build.assetsRoot,
    // 出口文件的名字
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
},
```



##### 2.3：配置loader （可选）

```javascript
rules: [
    {
        // 如果是.vue文件
        test: /\.vue$/,
        // 就采用vue-loader来出来转换.
        loader: 'vue-loader',
	}
]
```

loader的作用是什么? 各种特殊文件的后缀转换格式的工具.

例如: 浏览器不认识.vue文件,因此需要把.vue文件转换成js文件,以便浏览器解析,如何转换呢?就需要对应的loader

转换.vue文件的loader就叫vue-loader

例如: 把浏览器不能识别的ES6代码转换成浏览器可以识别的ES5代码,需要使用babel-loader



##### 2.4：配置plugin插件 （可选）

```javascript
plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
]
```

插件只是提供一些辅助功能.例如HtmlWebpackPlugin插件的功能就是把出口文件通过script标签插入到页面内.























