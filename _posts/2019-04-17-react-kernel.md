---
title: "React Kernel"
date: 2019-04-17 14:28:00
categories: [blog]
tags: [react]
---

### 概述

基于 vdom 机制的前端框架，它们的渲染原理大同小异，可以表示为
mount 阶段：组件 --编译-> vdom -> mount
update 阶段：组件 --编译-> vdom --diff-> patch
内存中维护一颗宿主树，数据变化时（setState），自动更新宿主树，得到一颗新树，然后 Diff 新老宿主树，找到有变化的部分，得到一个 Change(Patch)，将这个 Patch 加入队列，最终批量更新这些 Patch 到 宿主环境 中。
所以 react 在不同的宿主环境中需要不同的渲染器，
在 web 环境中，渲染器为 react dom，在原生环境中，渲染器为 react native。

### 一次渲染分 Reconciliation(协调阶段) 和 Commit(提交阶段)

https://juejin.im/post/5dadc6045188255a270a0f85#heading-7
https://github.com/facebook/react/issues/13186#issuecomment-403959161

- The render phase determines what changes need to be made to e.g. the DOM. During this phase, React calls render and then compares the result to the previous render.
- The commit phase is when React applies any changes. (In the case of React DOM, this is when React inserts, updates, and removes DOM nodes.) React also calls lifecycles like componentDidMount and componentDidUpdate during this phase.

在协调阶段，React 会创建一棵新树（workInProgressTree），可以类比 git 的新建分支，并搜集本次 rerender 中所有的变化，将其应用于 WIP，最终和老树 diff，得到最终的 patch，进入提交阶段。v16 版本之后对此阶段进行了重新设计，v16 之前的 diff 采用的递归，因此无法被打断和恢复，若耗时过长，会导致浏览器白屏影响用户体验；v16 之后出现了 fiber，diff 变成了对链表的 diff，fiber 就相当于链表的每个 node，整个 diff 过程分成了一个个时间片，React 在执行完一个时间片后会主动交还控制权（将下一个时间片传给 requestIdleCallback）给浏览器，整个协调阶段是 React 内部的动作，并不会涉及 dom 操作，所以这些断断续续并不会对用户造成影响，要注意的是，新版协调的不连续性，即控制权的交还和恢复可能造成生命周期函数的重复调用，所以此阶段执行的生命周期函数（constructor ～ getSnapshotBeforeUpdate）不能有副作用，像 componentWillMount、componentWillUpdate 都被取消了。  
提交阶段 react dom 负责把这些 patch 作用于真实 dom，这个阶段必须同步执行不能被打断，componentDidMount、componentDidUpdate、componentWillUnmount 会在此阶段被调用。

### 目录介绍

/packages 核心代码区  
/packages/react React  
/packages/react-dom ReactDOM  
/packages/shared 公共函数库  
/scripts 打包相关脚本  
/scripts/rollup/build.js 打包入口  
/scripts/rollup/bundles.js 打包配置

### React

#### Component & PureComponent

/packages/react/src/ReactBaseClasses.js  
PureComponent 的 prototype 比 Component 多了一个 isPureReactComponent，仅此而已

#### createElement: (type, config, children) => ReactElement

/packages/react/src/ReactElement.js

- 把 config 的变量转移给 props
- 设置 type.defaultProps 给 props
- 返回 ReactElement 对象

```js
interface ReactElement {
  $$typeof: REACT_ELEMENT_TYPE;
  type: type;
  key: key;
  ref: ref;
  props: props;
  _owner: owner;
}
```

### ReactDOM

#### render: (element, container, callback) => legacyRenderSubtreeIntoContainer

[1]: https://overreacted.io/zh-hans/react-as-a-ui-runtime/
