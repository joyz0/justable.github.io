---
title:  "webpack4之CodeSplitting"
date:   2019-01-07 14:42:00
categories: [blog]
tags: [webpack4]
---
> 学习下webpack4的CodeSplitting

### 引言
&#160; &#160; &#160; &#160;Code Splitting是webpack的重要特性之一，它允许我们把code分离到各个bundles中，好好的设计分离策略，可以提高项目对代码的利用效率，优化web项目在浏览器中的表现时显得尤为重要。

### chunk VS bundle
&#160; &#160; &#160; &#160;在webpack官方文档或是第三方文档都会频繁出现这两个词汇，一定有其他小伙伴和我有同样的困惑，就是它们有什么区别。官方说明可以参考<a href="https://webpack.js.org/glossary/" target="_blank">官方glossary</a>和<a href="https://github.com/webpack/webpack.js.org/issues/970" target="_blank">github issue</a>，不过我看完后还是一脸懵比。
&#160; &#160; &#160; &#160;我的理解是：它们都是代码的集合，多数情况下能互相替换，只不过侧重点有着细微区别，chunk往往在一段描述中侧重逻辑上的代码集合，bundle侧重物理代码集合，比如“我把sourceA.js和sourceB.js两个文件中的公共chuck提取到了bundle C中”这句话，我们还是能从中体会到那点区别的，又比如“该项目有三个entry chuck(bundle)”这句话，它们互相替换貌似没啥问题，不过文档中此时都会用chuck。

### 分离方法
1. 入口起点：使用 entry 配置手动地分离代码。
2. 防止重复：使用<a href="https://webpack.js.org/plugins/split-chunks-plugin/" target="_blank">SplitChunksPlugin</a>。
3. 动态导入：通过模块的内联函数调用来分离代码，比如import()。

#### 入口起点
&#160; &#160; &#160; &#160;该方法就是通过配置entry来实现代码分离，看下面这个例子 
##### index.js(分离前)
```javascript
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
##### webpack.config.js(分离前)
```javascript
{
  entry: {
    index: './src/index.js'
  }
}
```
##### index.js(分离后)
```javascript
import _ from 'lodash'
import './hello.js'

console.log(
  _.join(['I', 'am', 'index!'], ' ')
)
```
##### webpack.config.js(分离后)
```javascript
{
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  }
}
```
##### hello.js
```javascript
import _ from 'lodash'

function hello () {
  console.log(
    _.join(['Hello', 'world!'], ' ')
  )
}

hello()
```
##### 打包结果(分离前)
```
          Asset     Size  Chunks             Chunk Names
index.bundle.js  551 KiB   index  [emitted]  index
```
##### 打包结果(分离后)
```
          Asset     Size  Chunks             Chunk Names
hello.bundle.js  551 KiB   hello  [emitted]  hello
index.bundle.js  552 KiB   index  [emitted]  index
```
&#160; &#160; &#160; &#160;经过分离，hello功能放到了单独的文件中，但是两个文件都引用了lodash，导致最终生成的2个bundle都包含了lodash的代码。反映了此方法的2个问题：
1. 如果入口chunks中包含重复的modules，那些modules都会被引入到各个bundle中。
2. 这种方法不够灵活，并且不能依据程序逻辑进行动态拆分代码。

#### 防止重复
&#160; &#160; &#160; &#160;使用<a href="https://webpack.js.org/plugins/split-chunks-plugin/" target="_blank">SplitChunksPlugin</a>可以把重复的依赖输出到指定的chunk中，继续沿用上面的例子  
##### webpack.config.js(修改后)
```javascript
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
##### 打包结果
```
                        Asset      Size               Chunks             Chunk Names
              hello.bundle.js   6.9 KiB                hello  [emitted]  hello
              index.bundle.js  7.72 KiB                index  [emitted]  index
vendors~hello~index.bundle.js   547 KiB  vendors~hello~index  [emitted]  vendors~hello~index
```
&#160; &#160; &#160; &#160;可以看到lodash被分离到了单独的bundle中。还有一些对于代码分离很有帮助的插件和loaders
- <a href="https://webpack.js.org/plugins/mini-css-extract-plugin/" target="_blank">mini-css-extract-plugin</a>: 用于分离css
- <a href="https://webpack.js.org/loaders/bundle-loader/" target="_blank">bundle-loader</a>: 用于分离代码和延迟加载生成的bundle
- <a href="https://github.com/gaearon/promise-loader" target="_blank">promise-loader</a>: 类似于bundle-loader，但是用的是promises

#### 动态导入
&#160; &#160; &#160; &#160;动态导入就是通过<a href="https://github.com/tc39/proposal-dynamic-import" target="_blank">import()</a>或<a href="https://webpack.js.org/api/module-methods/#require-ensure" target="_blank">require.ensure</a>来动态引入依赖，沿用上面的例子
##### webpack.config.js(修改后)
```javascript
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
##### index.js(修改后)
```javascript
function getHello() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    console.log(_.join(['Hello', 'world!'], ' '))
  }).catch(error => 'An error occurred while loading the hello');
}
getHello().then(() => {
  console.log(_.join(['I', 'am', 'index!'], ' '))
})
```
##### 打包结果
```
                   Asset      Size          Chunks             Chunk Names
         index.bundle.js  8.55 KiB           index  [emitted]  index
vendors~lodash.bundle.js   547 KiB  vendors~lodash  [emitted]  vendors~lodash
```
&#160; &#160; &#160; &#160;可能有人注意到了上面的<a herf="https://webpack.js.org/api/module-methods/#import-" target="_blank">webpackChunkName</a>注释，它的目的是修改chunk name，这里说下打包结果中各个title的含义，Asset：bundle名称，Size：bundle大小，Chunks：chunkIds，Chunk Names：chunk name。再说下webpack.config.js中的chunkFilename，它规定非入口的chunk文件名称。

### Prefetching/Preloading modules(4.6.0+)
- prefetch: resource is probably needed for some navigation in the future。
- preload: resource might be needed during the current navigation  

#### 一个prefetch例子
比如有3个文件，分别是index.html，index.js和modal.js，index.html中有个button，点击后弹框，也就是要去加载modal.js
##### index.js
```javascript
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
##### ChartComponent.js
```javascript
async initComponent () {
  const ECharts = import(/* webpackPreload: true */ 'ECharts.js')
  ECharts.init()
}
export default initComponent
```
##### index.js
```javascript
import initChart from './ChartComponent.js'
function pageInit () {
  loadingIndicator() // 比如loading圈圈
  initChart()
}
```
webpack识别到webpackPreload: true时，会在index.html的head中append&lt;link rel="preload"&gt;，浏览器就会在渲染index.html时并发的去加载ECharts库，如果不是preload的情况，浏览器要执行到loadingIndicator()时才会去加载ECharts库。

#### preload和prefetch的区别
1. A preloaded chunk starts loading in parallel to the parent chunk. A prefetched chunk starts after the parent chunk finishes loading.
2. A preloaded chunk has medium priority and is instantly downloaded. A prefetched chunk is downloaded while browser is idle.
3. A preloaded chunk should be instantly requested by the parent chunk. A prefetched chunk can be used anytime in the future.
4. Browser support is different.

### bundle分析
有的时候我们需要分析bundles的依赖分布，占用空间等等，下面列了些工具链接  
- <a href="https://github.com/webpack/analyse" target="_blank">official analyze tool</a>: 官方分析工具
- <a href="https://alexkuz.github.io/webpack-chart/" target="_blank">webpack-chart</a>: 交互式饼图来显示webpack统计数据
- <a href="https://chrisbateman.github.io/webpack-visualizer/" target="_blank">webpack-visualizer</a>: 可视化并分析你的bundles，检查哪些模块占用空间，哪些可能是重复使用的
- <a href="https://github.com/webpack-contrib/webpack-bundle-analyzer" target="_blank">webpack-bundle-analyzer</a>: 一款分析bundles内容的插件及CLI工具，以便捷的、交互式、可缩放的树状图形式展现给用户
- <a href="https://webpack.jakoblind.no/optimize" target="_blank">webpack bundle optimize helper</a>: 这款工具会分析你的bundles，并给予你怎么改善缩减bundle size切实可行的建议

### SplitChunksPlugin
&#160; &#160; &#160; &#160;此插件负责webpack4的chunk分离，不作任何配置即可享用此插件提供的默认配置方案，我们也可以在配置文件的optimization.splitChunks中去覆盖默认配置，它替代了以前的CommonsChunkPlugin插件。
webpack会基于以下4个条件自动把目标代码块分离成chunk：
1. 新的chunk能够被共享或是来自node_modules的模块
2. 新的chunk文件压缩前体积大于30kb
3. 按需加载代码块的请求数量应该<=5
4. 页面初始化时加载代码块的请求数量应该<=3
为了满足条件条件3和4，bigger chunks是更好的选择

### 默认配置
```javascript
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
        // 优先级，大的先执行
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


