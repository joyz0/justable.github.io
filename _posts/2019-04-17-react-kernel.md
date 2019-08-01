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
