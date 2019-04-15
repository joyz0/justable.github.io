---
title:  "React Hooks"
date:   2018-04-15 13:34:00
categories: [blog]
tags: [react]
---

第一次看到hooks用法时，很好奇useEffect是怎么一一对应到functional component的，我想了下，如果是我会怎么实现这一功能。
```js
let mounted
let unmounted
function useEffect(fn) {
  mounted = fn
}

function Main() {
  // render Header component,useEffect was called here
  // trigger mounted
  unmounted = mounted()
  // render Body component
}
```