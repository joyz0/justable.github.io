---
title: "Mondularity"
date: 2019-04-16 9:03:00
categories: [blog]
tags: [module]
---

最近突然对模块化在实际应用中的实现原理产生了疑惑

1. webpack 的实现和浏览器原生支持的实现区别
2. 一个组件被多个文件 import，并且这个组件内部有个全局变量维系自身的运作，该组件对外开放的接口都有可能造成此全局变量的改变，比如 react 的 useState 和 useEffect

### webpack 的实现和浏览器原生支持的实现区别

webpack 是编译时确定模块的依赖关系，并在 webapck 的运行时文件中根据模块 ID 进行依赖管理；  
浏览器原生应该是运行时，默认在 dom 加载完 defer 运行，它的模块缓存应该也是浏览器支持。  
[http://www.cnblogs.com/jiasm/p/9160691.html](1)  
[https://www.jianshu.com/p/b52b6996d612](2)

### 一个组件被多个文件 import...

useState 和 useEffect 在 react 渲染主程序中是靠数组维系运作的，依靠内部维护的 cursor(数组下标)进行一一对应，所以对调用的顺序和稳定性有严格要求。每次 rerender 时 cursor 置 0，这儿有个疑惑，是整个页面所有的 update 称作一次 rerender 还是一个组件的 update 称作一次 rerender，之所以有这个困惑还是源自模块化，useState 和 useEffect 被多个组件使用，内部又维护了全局变量，那这个 cursor 是以整个页面渲染为单位还是以单组件渲染为单位？

### commonjs 和 es6

module，exports 这些变量不存在于浏览器中，所以在浏览器环境中 import commonjs 模块会报错，在 node 环境下不会报错。
CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用，CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
多个入口文件加载同一个 commonjs 模块时是不同的拷贝，多个入口文件加载同一个 es 模块时是相同的实例。

[1]: http://www.cnblogs.com/jiasm/p/9160691.html
[2]: https://www.jianshu.com/p/b52b6996d612
