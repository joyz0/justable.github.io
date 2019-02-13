---
title:  "vue-loader"
date:   2018-02-13 12:13:00
categories: [blog]
tags: [vue]
---

> vue-loader为单文件组件提供支持

### 单文件组件(SFC) 
每个 .vue 文件包含三种类型的顶级语言块 &lt;template&gt;、&lt;script&gt; 和 &lt;style&gt;，还允许添加可选的自定义块

### template
- 每个 .vue 文件最多包含一个 &lt;template&gt; 块。
- 内容将被提取并传递给 vue-template-compiler 为字符串，预处理为 JavaScript 渲染函数，并最终注入到从 &lt;script&gt; 导出的组件中。

### script
- 每个 .vue 文件最多包含一个 &lt;script&gt; 块。
- 这个脚本会作为一个 ES Module 来执行。
- 它的默认导出应该是一个 Vue.js 的组件选项对象。也可以导出由 Vue.extend() 创建的扩展对象。
- 任何匹配 .js 文件 (或通过它的 lang 特性指定的扩展名) 的 webpack 规则都将会运用到这个 &lt;script&gt; 块的内容中

### style
- 默认匹配：/\.css$/。
- 一个 .vue 文件可以包含多个 &lt;style&gt; 标签。
- &lt;style&gt; 标签可以有 scoped 或者 module 属性 (查看 scoped CSS和 CSS Modules) 以帮助你将样式封装到当前组件。具有不同封装模式的多个 &lt;style&gt; 标签可以在同一个组件中混合使用。
- 任何匹配 .css 文件 (或通过它的 lang 特性指定的扩展名) 的 webpack 规则都将会运用到这个 &lt;style&gt; 块的内容中。

### custom
可以在 .vue 文件中添加额外的自定义块来实现项目的特定需求，例如 &lt;docs&gt; 块。vue-loader 将会使用标签名来查找对应的 webpack loader 来应用在对应的块上。webpack loader 需要在 vue-loader 的选项 loaders 中指定。