---
title:  "递归"
date:   2019-07-16 19:32:00
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

### 递归 vs 尾递归
递归过程中有两个基本阶段：递推和回归  
当<code>factorial(3)</code>时，过程如下
```js
// 占用了3个栈帧（特指执行栈，递归还需要更多栈来协调完成，比如变量栈，静态资源栈，程序指令栈）
F(3) = 3 * F(2) // 递推
F(2) = 2 * F(1) // 递推
F(1) = 1 // 递推
F(2) = 2 * 1 // 回归
F(3) = 3 * 2 // 回归
```
第一次输入3时，编译器发现并没有满足函数终止条件，因此将在栈中新增一个活跃记录，最终走到F(1)时，函数终止，并回归计算结果（此处可以理解为出栈？）。  
当<code>factorial(3, 1)</code>时，过程如下
```js
// 其实只占用了1个栈帧，每次都覆盖
F(3, 1) = F(2, 3) // 递推
F(2, 3) = F(1, 6) // 递推
```
编译器检测到此函数调用是尾递归，它将覆盖当前活跃记录而不是新增（这需要编译器的支持），因为下一个活动记录并不依赖上一个活动记录。

### 递归的优缺点
递归的有点显而易见，可以大幅所见代码篇幅，但是某些递归算法会快速的耗尽内存，如果使用递归者不清楚执行原理，并不能找出问题所在，下面举一个例子：   
一个整数序列，每一项都是前两项的和，求第n项的值，比如：<code>[1, 1, 2, 3, 5, 8, 13]</code>
```js
function factorial(n) {
  if (n < 2) return 1;
  else return factorial(n - 1) + factorial(n - 2);
}
factorial(40);
```
第一次调用创建了1个变量，第二次2个，第三次4个，每次以指数形式增长，很容易导致程序瘫痪。

### 如何理解递归中的return
首先，把每次递归想象成一个节点，每个return只在那个节点中起作用，告诉程序不用执行我这节点后的步骤了。如何理解最外层的return root返回什么，只需假设只发生了一次递归。
```java
TreeNode insertIntoBST(TreeNode root, int val) {
    // 找到空位置插入新节点
    if (root == null) return new TreeNode(val);
    // if (root.val == val)
    //     BST 中一般不会插入已存在元素
    if (root.val < val) 
        root.right = insertIntoBST(root.right, val);
    if (root.val > val) 
        root.left = insertIntoBST(root.left, val);
    return root;
}
```


