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
