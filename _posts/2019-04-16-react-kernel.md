---
title:  "React Kernel"
date:   2018-04-17 14:28:00
categories: [blog]
tags: [react]
---

### 目录介绍
/packages 核心代码区
/packages/shared 公共函数库
/packages/react/src/React.js 入口

/scripts 打包相关脚本
/scripts/rollup/build.js 打包入口

### Component & PureComponent
/packages/react/src/ReactBaseClasses.js  
PureComponent的prototype比Component多了一个isPureReactComponent，仅此而已

### FAQ
- baseUrl配置在哪