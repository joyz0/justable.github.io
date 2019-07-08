---
title:  "React Kernel FAQ"
date:   2019-04-17 14:28:00
categories: [blog]
tags: [react]
---
- baseUrl配置在哪

- React.Suspense的实现
https://codepen.io/Justable/pen/PrbVXb
Suspense的子组件异常throw promise -> Suspense componentDidCatch -> error resolved -> Suspence setState rerender -> 子组件rerender -> 子组件显示数据

- static getDerivedStateFromProps()的应用
当一个组件需要根据传入的props来更新内部state时，可以使用该方法

- getSnapshotBeforeUpdate()的应用
https://codepen.io/Justable/pen/QXKXzR

- componentDidMount()中setState()发生的重绘不再触发componentDidMount()？
当然，之后是触发componentDidUpdate()

- 如何获取孙子组件的ref