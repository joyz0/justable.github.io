---
title:  "Mondularity"
date:   2018-04-16 9:03:00
categories: [blog]
tags: [module]
---

最近突然对模块化在实际应用中的实现原理产生了疑惑
1. webpack的实现和浏览器原生支持的实现区别
2. 一个组件被多个文件import，并且这个组件内部有个全局变量维系自身的运作，该组件对外开放的接口都有可能造成此全局变量的改变，比如react的useState和useEffect

### webpack的实现和浏览器原生支持的实现区别
webpack是编译时确定模块的依赖关系，并在webapck的运行时文件中根据模块ID进行依赖管理；  
浏览器原生应该是运行时，默认在dom加载完defer运行，它的模块缓存应该也是浏览器支持。  
[http://www.cnblogs.com/jiasm/p/9160691.html](1)  
[https://www.jianshu.com/p/b52b6996d612](2)

### 一个组件被多个文件import...
useState和useEffect在react渲染主程序中是靠数组维系运作的，依靠内部维护的cursor(数组下标)进行一一对应，所以对调用的顺序和稳定性有严格要求。每次rerender时cursor置0，这儿有个疑惑，是整个页面所有的update称作一次rerender还是一个组件的update称作一次rerender，之所以有这个困惑还是源自模块化，useState和useEffect被多个组件使用，内部又维护了全局变量，那这个cursor是以整个页面渲染为单位还是以单组件渲染为单位？

[1]: http://www.cnblogs.com/jiasm/p/9160691.html
[2]: https://www.jianshu.com/p/b52b6996d612