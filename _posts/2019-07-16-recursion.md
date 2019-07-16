---
title:  "递归"
date:   2019-07-08 9:32:00
categories: [blog]
tags: [recursion]
---

先来实现一个阶乘
```js
function factorial(a) {
  if (a === 1) return 1;
  else return a * factorial(a - 1);
}
factorial(3);
// stack
// return 1
// return 2 * factorial(1)
// return 3 * factorial(2)
```
改成尾递归
```js
function factorial(a, b) {
  if (a === 1) return b;
  else return factorial(a - 1, a * b);
}
factorial(3, 1);
// stack
// return 6
// return factorial(2 - 1, 2 * 3)
// return factorial(3 - 1, 3 * 1)
```
再看循环中的递归
```js
function addFlat(node, count = 0) {
  console.log(`start-${count}`)
  if (!Array.isArray(node)) {
    return node
  }
  for (let i = 0; i < node.length; i++) {
    console.log(`for-${count}`)
    count += addFlat(node[i], count);
  }
  return count
}
console.log(addFlat([1, 3]));
// start-0 
// for-0 
// start-0 
// for-1 
// start-1 
```
可见，在循环中，会先进入递归方法，再进入下一个循环

### 循环 vs 递归
每次循环时，当前循环加入执行栈中，上一个循环就会出栈；
递归时需要多个执行栈配合，只有尾递归才会把上一次命令出栈，最终效果类似循环。


