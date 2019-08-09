---
title:  "webpack4之CodeSplitting"
date:   2019-01-07 14:42:00
categories: [blog]
tags: [webpack4]
---
> 学习下webpack4的CodeSplitting

### 引言
Code Splitting是webpack的重要特性之一，它允许我们把code分离到各个bundles中，好好的设计分离策略，可以提高项目对代码的利用效率，优化web项目在浏览器中的表现时显得尤为重要。

### chunk VS bundle VS module
module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：  
我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。
[https://juejin.im/post/5cede821f265da1bbd4b5630](https://juejin.im/post/5cede821f265da1bbd4b5630)

### 分离方法
有下面3种分离策略
1. 入口起点：使用 entry 配置手动地分离代码。
2. 防止重复：使用[SplitChunksPlugin][2]。
3. 动态导入：通过模块的内联函数调用来分离代码，比如import()。

#### 方法一：入口起点
该方法的核心思想是不修改SplitChunksPlugin的默认配置，依靠人为组织代码文件，配置entry达到分离效果，看下面这个例子 
##### 分离前
```js
// index.js
import _ from 'lodash'
function hello () {
  console.log(
    _.join(['Hello', 'world!'], ' ')
  )
}
hello()
console.log(
  _.join(['I', 'am', 'index!'], ' ')
)
```
```js
// webpack.config.js
{
  entry: {
    index: './src/index.js'
  }
}
```
打包结果
```
          Asset     Size  Chunks             Chunk Names
index.bundle.js  551 KiB   index  [emitted]  index
```
##### 分离后
```js
// index.js
import _ from 'lodash'
import './hello.js'
console.log(
  _.join(['I', 'am', 'index!'], ' ')
)
```
```js
// webpack.config.js
{
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  }
}
```
```js
// hello.js
import _ from 'lodash'
function hello () {
  console.log(
    _.join(['Hello', 'world!'], ' ')
  )
}
hello()
```
打包结果
```
          Asset     Size  Chunks             Chunk Names
hello.bundle.js  551 KiB   hello  [emitted]  hello
index.bundle.js  552 KiB   index  [emitted]  index
```
经过分离，hello功能放到了单独的文件中，但是因为SplitChunksPlugin的默认配置只针对async模块，最终导致生成的2个bundle都包含了lodash的代码。反映了此方法的2个问题：
1. 如果不同入口文件中包含相同的第三方库，这些库都会被各个引入到bundle中。
2. 这种方法不够灵活，并且不能依据程序逻辑进行动态拆分代码。

#### 方法二：防止重复
该方法的核心思想是修改SplitChunksPlugin的默认配置，根据实际需求自定义配置，继续沿用上面的例子  
##### 修改后
```js
// webpack.config.js
{
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```
打包结果
```
                        Asset      Size               Chunks             Chunk Names
              hello.bundle.js   6.9 KiB                hello  [emitted]  hello
              index.bundle.js  7.72 KiB                index  [emitted]  index
vendors~hello~index.bundle.js   547 KiB  vendors~hello~index  [emitted]  vendors~hello~index
```
可以看到lodash被分离到了单独的bundle中。还有一些对于代码分离很有帮助的插件和loaders
- [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/): 用于分离css
- [bundle-loader](https://webpack.js.org/loaders/bundle-loader/): 用于分离代码和延迟加载生成的bundle
- [promise-loader](https://github.com/gaearon/promise-loader): 类似于bundle-loader，但是用的是promises

#### 方法三：动态导入
该方法的核心思想是不修改SplitChunksPlugin的默认配置，利用SplitChunksPlugin默认针对async的特点，使用[import()][4]或[require.ensure][5]异步管理第三方库，沿用上面的例子
##### 修改后
```js
// webpack.config.js
{
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js', // 入口的文件名称
    chunkFilename: '[name].bundle.js', // 非入口的chunk文件名称，这儿[name]取的是chunkId
    path: path.resolve(__dirname, 'dist')
  }
}
```
```js
// index.js
function getHello() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    console.log(_.join(['Hello', 'world!'], ' '))
  }).catch(error => 'An error occurred while loading the hello');
}
getHello().then(() => {
  console.log(_.join(['I', 'am', 'index!'], ' '))
})
```
打包结果
```
                   Asset      Size          Chunks             Chunk Names
         index.bundle.js  8.55 KiB           index  [emitted]  index
vendors~lodash.bundle.js   547 KiB  vendors~lodash  [emitted]  vendors~lodash
```
可能有人注意到了上面的[webpackChunkName][6]注释，它的目的是修改chunk name，这里说下打包结果中各个title的含义，Asset：bundle名称，Size：bundle大小，Chunks：chunkIds，Chunk Names：chunk name，没有列在entry的则没有name。

### Prefetching/Preloading modules(4.6.0+)
- prefetch: resource is probably needed for some navigation in the future。
- preload: resource might be needed during the current navigation  

#### 一个prefetch例子
比如有3个文件，分别是index.html，index.js和modal.js，index.html中有个button，点击后弹框，也就是要去加载modal.js
```js
// index.js
async showModal () {
  const modal = import(/* webpackPrefetch: true */ 'modal.js')
  modal.show()
}
const $btn = document.getElementById('button')
$btn.addEventListener('click', () => showModal())
```
webpack检测到webpackPrefetch: true时，会在index.html的head中append&lt;link rel="prefetch" href="modal.js"&gt;，来告知浏览器去prefetch modal.js。

#### 一个preload例子
想象一个场景，有一个图标可视化组件ChartComponent，它依赖了ECharts库
```js
// ChartComponent.js
async initComponent () {
  const ECharts = import(/* webpackPreload: true */ 'ECharts.js')
  ECharts.init()
}
export default initComponent
```
```js
// index.js
import initChart from './ChartComponent.js'
function pageInit () {
  loadingIndicator() // 比如loading圈圈
  initChart()
}
```
webpack识别到webpackPreload: true时，会在index.html的head中append&lt;link rel="preload"&gt;，浏览器就会在渲染index.html时并发的去加载ECharts库，如果不使用preload，浏览器要执行到loadingIndicator()时才会去加载ECharts库，总结来说就是提前通知浏览器当前页面会加载ECharts库。

#### preload和prefetch的区别
1. A preloaded chunk starts loading in parallel to the parent chunk. A prefetched chunk starts after the parent chunk finishes loading.
2. A preloaded chunk has medium priority and is instantly downloaded. A prefetched chunk is downloaded while browser is idle.
3. A preloaded chunk should be instantly requested by the parent chunk. A prefetched chunk can be used anytime in the future.
4. Browser support is different.

### bundle分析
有的时候我们需要分析bundles的依赖分布，占用空间等等，下面列了些工具链接  
- [official analyze tool][7]: 官方分析工具
- [webpack-chart][8]: 交互式饼图来显示webpack统计数据
- [webpack-visualizer][9]: 可视化并分析你的bundles，检查哪些模块占用空间，哪些可能是重复使用的
- [webpack-bundle-analyzer][10]: 一款分析bundles内容的插件及CLI工具，以便捷的、交互式、可缩放的树状图形式展现给用户
- [webpack bundle optimize helper][11]: 这款工具会分析你的bundles，并给予你怎么改善缩减bundle size切实可行的建议

### SplitChunksPlugin VS CommonsChunkPlugin
webpack v4版本使用SplitChunksPlugin替换了之前的CommonsChunkPlugin，CommonsChunkPlugin有以下问题： 
#### CommonsChunkPlugin
```
文件
entryA: Vue, Vuex, component
entryB: Vue, axios, component
entryC: Vue, Vuex, axios, component
minChunks: 2 
产出
vendor-chunk: vue vuex axios
chunkA~chunkC: only the component
```
可以看出抽离的粒度比较粗，并且它不支持async
#### SplitChunksPlugin
```
文件
entryA: Vue, Vuex, component
entryB: Vue, axios, component
entryC: Vue, Vuex, axios, component
minChunks: 2 
产出
vendor-chunkA-C：Vuex
vendor-chunkB-C：axios
vendor-chunkA-B-C：Vue
chunkA~chunkC: only the component
```
可以看出抽离的粒度刚刚好，并且支持async，不过会有文件过多的问题

### optimization.runtimeChunk
它的作用是将包含chunks映射关系的runtime文件单独从entry chunk中提取出来，因为每一个chunk的id基本都是基于内容hash出来的，所以你每次改动都会影响它，如果不将它提取出来的话，等于entry chunk每次都会改变，每次发版本都会使浏览器缓存失效（第三方库并没有变动，但runtime变了）。

### optimization.splitChunks.cacheGroups.default
因为默认的vendors组只会匹配node_modules下的库，如果是自己写的可复用代码（比如/utils/fetch）或下载到本地的第三方库（比如/assets/js/jquery）被多处引入，则会匹配到default组中


### SplitChunksPlugin的默认配置
```js
optimization: {
  splitChunks: {
    // [function (chunk) | string]
    // all, async, initial 三选一, 插件作用的chunks范围
    chunks: 'async',
    // [number](Byte)
    // 分离后的chuck文件大小<=30000就不分离
    minSize: 30000,
    maxSize: 0,
    // [number]
    // 分离chuck的最小阀值，代码块被共享次数<=1就不分离
    minChunks: 1,
    // [number]
    // 按需加载时最大异步请求chuck数
    maxAsyncRequests: 5,
    // [number]
    // 入口文件的最大请求chuck数
    maxInitialRequests: 3,
    // [string]
    // chunk的命名连接符
    automaticNameDelimiter: '~',
    // [boolean: true | function (module, chunks, cacheGroupKey) | string]
    // true时会根据chunk和cacheGroups的key命名，生产环境建议false
    name: true,
    // cacheGroups的参数包括上述(可以覆盖上述)，并且有3个独立参数test，priority，reuseExistingChunk
    cacheGroups: {
      vendors: {
        // [function (module, chunk) | RegExp | string]
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        // [string]
        filename: '[name].bundle.js',
        // [boolean]
        // true时强制生成此chunk，即忽略minSize，minChunks，maxAsyncRequests，maxInitialRequests
        enforce: false
      },
      // 默认缓存组，可以设置为false来禁用
      default: {
        minChunks: 2,
        // [number]
        // 优先级大的先匹配，在vendors组匹配正则后，没匹配上的剩余部分会打到default中
        priority: -20,
        // [boolean]
        reuseExistingChunk: true
      }
    }
  }
}
```

### 参考
[Code Splitting][1]&#160;&#160;[SplitChunksPlugin][2]

[1]: https://webpack.js.org/guides/code-splitting/
[2]: https://webpack.js.org/plugins/split-chunks-plugin/
[3]: https://www.cnblogs.com/wmhuang/p/8967639.html
[4]: https://github.com/tc39/proposal-dynamic-import
[5]: https://webpack.js.org/api/module-methods/#require-ensure
[6]: https://webpack.js.org/api/module-methods/#import-
[7]: https://github.com/webpack/analyse
[8]: https://alexkuz.github.io/webpack-chart/
[9]: https://chrisbateman.github.io/webpack-visualizer/
[10]: https://github.com/webpack-contrib/webpack-bundle-analyzer
[11]: https://webpack.jakoblind.no/optimize
