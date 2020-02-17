## 几个 demo

- [demo1: 只转换箭头函数](./src/demo1)
- [demo2: 在代码中使用](./src/demo2)
- [demo3: 使用@babel/preset-env 简化配置](./src/demo3)
- [demo4: 使用@babel/plugin-transform-runtime](./src/demo4)
- [react](./src/react)
- [webpack](./src/webpack)

## babel 能做什么

- 转换语法（依赖 plugins/preset）
- 降级实现新特性（依赖@babel/polyfill）
- 转换重构源码 (依赖 codemods)

⚠️transform 是 string->string，parse 是 string->object。  
⚠️babel 的配置优先读取当前目录，并像上层查找，直到 package.json 所在目录或 babelrc=false。

## 核心 npm 包

- @babel/core
- @babel/cli
- @babel/polyfill
- @babel/presets
- @babel/plugins
- @babel/helpers
- @babel/plugin-transform-runtime，@babel/runtime，@babel/runtime-corejs2，@babel/runtime-corejs3

### @babel/core

包含了核心的转换逻辑，需要对应的 plugins/preset 才能发挥作用

### @babel/cli

让我们能够在 terminal 中以命令行的方式操作 babel

### @babel/polyfill

包含了 corejs 和 regenerator 这两个第三方包，不会导入小于 stage 4 的特性，默认为 core-js2。不同于 plugins 对语法的转换，polyfill 是对新实例特性的降级实现，双方是互补的关系。babel7.4.0 后@babel/polyfill 被标记为 deprecated，推荐我们直接使用 corejs 和 regenerator。

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

⚠️ 在一个开源的 library 中并不推荐使用它。  
⚠️ 通常我们需要在 entry 中手动引入 polyfill，当使用 babel-node 时会自动引入。  
⚠️ polyfill 会直接修改全局变量（比如 Array，String 等）prototype，某种意义上污染了全局环境，如果我们不希望污染全局变量，可以使用@babel/plugin-transform-runtime。

### @babel/presets

- 🌟@babel/preset-env  
  默认会根据[Browserslist](https://github.com/browserslist/browserslist#queries)引入对应 ES2015+版本的 polyfills，除非指定了 targets 或 ignoreBrowserslistConfig。
  包含了 plugins，会根据 useBuiltIns 选项决定以何种方式引入@babel/polyfill，当 useBuiltIns=true 时要指定 corejs 的版本。  
  还有许多其他的[参数配置](https://babeljs.io/docs/en/babel-preset-env#targets)。

- @babel/preset-react
- @babel/preset-typescript

### @babel/plugins

我们这里代指一系列 plugin 包，当我们精确知道项目需要哪种语法特性时，可以单独引入所对应的 plugin 包以减少最终打包体积。  
⚠️ 配置文件中的 plugins 数组执行顺序从左到右，presets 数组执行顺序从右到左。  
当我们需要知道某个 plugin 包所对应的 options 时，可以参考[官网](https://babeljs.io/docs/en/options)或去源码处查看
![1](./assets/1.jpg)

### @babel/helpers

一系列工具，比如 class 语法的实现就是 helper 提供的

### @babel/plugin-transform-runtime，@babel/runtime，@babel/runtime-corejs2，@babel/runtime-corejs3

@babel/plugin-transform-runtime 主要做三件事

1. 原本内嵌在每个文件的 helpers 改成模块引用的方式（需要开启 helpers 选项，默认开启），减少代码体积，依赖@babel/runtime；
2. 原本转换 generator 和 async 语法后暴露在全局环境中的 regeneratorRuntime（regenerator-runtime 包提供）改为模块引用的方式（需要开启 regenerator 选项，默认开启），依赖@babel/runtime；
3. 原本由于 core-js 暴露在全局环境中的 polyfill 特性（比如 Array.prototype.includes）改成模块引用的方式（需要开启 corejs 选项，默认关闭），依赖@babel/runtime-corejs2 或@babel/runtime-corejs3。

> 关于 helpers、generator、polyfill 的引用方式———全局污染、局部引用、代码内嵌，在 webpack 和 rollup 使用时要分开了解，不然太乱了。。rollup 有一个额外的 rollup-plugin-babel，虽说会采用本地的 .babelrc 文件中的配置，但又额外增加了一些选项，而有些选项又是和 @babel/plugin-transform-runtime 中的重复的，比如 @babel/plugin-transform-runtime 中 helpers 默认是 tru e 的，但在 rollup 中需要开启 runtimeHelpers；类似的还有 externalHelpers，它的效果是变成全局污染模式。

## 常用配置

#### spec

boolean, defaults to false
作用于@babel/plugin-transform-arrow-function

1. 为方法绑定了与定义同层 context 的 this
2. 校验了是否被用作于 new 实例
3. 为方法增加了 name

#### loose

boolean, defaults to false
默认转换 class 时，会通过 Object.defineProperty 来定义 prototype 中的方法，并设置成 non-enumerable（这是 ES6 的要求）。如果实际项目中不依赖 non-enumerable 这个特性，则 loose=true 会减少代码体积。

#### useBuiltIns

默认不指定
作用于在 webpack 下使用 babel 时，控制@babel/preset-env 以何种方式引入@babel/polyfill，

1. 不指定

```js
module.exports = {
  entry: ["@babel/polyfill", "./app/js"]
};
```

2. usage：不用在 entry 中手动引入，babel 会根据实际使用的特性引入相对应的 polyfill
3. entry：需要我们在 entry 中手动通过 import/require 的形式引入

## 使用方式

- 通过命令行转换
- 直接在代码中转换
- 使用 webpack 和 babel-loader

## 自定义 preset

## 自定义 plugin

## corejs2 和 corejs3 的区别

core-js@2 分支中不包含一些最新的实例方法特性，新特性都会添加到 core-js@3，建议都使用后者。例如 core-js@2 不包含 rray.prototype.flat()。

## corejs3 和 @babel/runtime-corejs3 的区别

前者的 polyfill 都是修改全局对象的 prototype 中的，后者是局部文件中以引用的形式存在不会污染全局变量。

## stage 介绍

- Stage 0 - Strawman: just an idea, possible Babel plugin.
- Stage 1 - Proposal: this is worth working on.
- Stage 2 - Draft: initial spec.
- Stage 3 - Candidate: complete spec and initial browser implementations.
- Stage 4 - Finished: will be added to the next yearly release.
