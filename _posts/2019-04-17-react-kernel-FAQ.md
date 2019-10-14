---
title: "React Kernel FAQ"
date: 2019-04-17 14:28:00
categories: [blog]
tags: [react]
---

- baseUrl 配置在哪

- React.Suspense 的实现
  https://codepen.io/Justable/pen/PrbVXb
  Suspense 的子组件异常 throw promise -> Suspense componentDidCatch -> error resolved -> Suspence setState rerender -> 子组件 rerender -> 子组件显示数据

- static getDerivedStateFromProps()的应用
  当一个组件需要根据传入的 props 来更新内部 state 时，可以使用该方法

- getSnapshotBeforeUpdate()的应用
  https://codepen.io/Justable/pen/QXKXzR

- componentDidMount()中 setState()发生的重绘不再触发 componentDidMount()？
  当然，之后是触发 componentDidUpdate()

- 如何获取孙子组件的 ref

- useCallback 的应用
  试想一个场景，一个内联函数中有 setState 的逻辑，这会导致组件 rerender，又因内联函数每次都是重新赋值的，因此会导致无限循环，useCallback 返回一个被缓存的函数，每次 rerender 时 react 检测到的函数没有发生变化，可以有效的避免无限循环 rerender

- useMemo 的应用
  useMemo 会缓存函数的返回结果
  https://codepen.io/Justable/pen/zgmXZY

- useRef 和普通对象{ current: null }的区别
  普通对象在每次组件 rerender 时会重新赋值，useRef 的返回值是不变的

- 对比 useMemo 和 useCallback
  useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

- 对比 useState 和 useReducer
  多状态时用 useReducer 更利于维护，并且会合并更新

- React 是如何判断一个组件需要重绘的
  显式的 setState，props 改变，父组件重绘（如果并没有影响到子组件的 state 和 props，则不会重绘）

- useEffect 中的 setInterval 无法获取最新 state 问题
  主要由闭包导致
  https://codepen.io/Justable/pen/oNNbOWg
