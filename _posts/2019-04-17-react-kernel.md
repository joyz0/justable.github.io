---
title:  "React Kernel"
date:   2019-04-17 14:28:00
categories: [blog]
tags: [react]
---

### 概述
基于vdom机制的前端框架，它们的渲染原理大同小异，可以表示为
mount阶段：组件 --编译-> vdom -> mount
update阶段：组件 --编译-> vdom --diff-> patch
内存中维护一颗虚拟DOM树，数据变化时（setState），自动更新虚拟 DOM，得到一颗新树，然后 Diff 新老虚拟 DOM 树，找到有变化的部分，得到一个 Change(Patch)，将这个 Patch 加入队列，最终批量更新这些 Patch 到 DOM 中。

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
PureComponent的prototype比Component多了一个isPureReactComponent，仅此而已

#### createElement: (type, config, children) => ReactElement
/packages/react/src/ReactElement.js  
- 把config的变量转移给props
- 设置type.defaultProps给props
- 返回ReactElement对象
```js
interface ReactElement {
  $$typeof: REACT_ELEMENT_TYPE,
  type: type,
  key: key,
  ref: ref,
  props: props,
  _owner: owner
}
```
### ReactDOM
#### render: (element, container, callback) => legacyRenderSubtreeIntoContainer
