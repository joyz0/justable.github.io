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

- useCallback的应用
试想一个场景，一个内联函数中有setState的逻辑，这会导致组件rerender，又因内联函数每次都是重新赋值的，因此会导致无限循环，useCallback返回一个被缓存的函数，每次rerender时react检测到的函数没有发生变化，可以有效的避免无限循环rerender

- useMemo的应用
useMemo会缓存函数的返回结果
https://codepen.io/Justable/pen/zgmXZY

- useRef和普通对象{ current: null }的区别
普通对象在每次组件rerender时会重新赋值，useRef的返回值是不变的

- 对比useMemo和useCallback
useCallback(fn, deps) 相当于 useMemo(() => fn, deps)