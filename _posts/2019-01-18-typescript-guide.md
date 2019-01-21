---
title:  "Typescript导读"
date:   2018-01-03 14:24:00
categories: [blog]
tags: [typescript]
---
> Typescript知识点汇总，阅读前必须掌握ECMAScript6

### 引言
&#160; &#160; &#160; &#160;Typescript热度越来越高，最近刚把官方文档看了，对于想要快速上手TS的伙伴来说，官方文档太长了，因此我把重要知识点做了汇总，每个知识点用概括性的文字描述，然后配合一个例子，最大限度缩减每个知识点的篇幅。

### 知识点汇总
#### 基础类型
``` typescript
let n: number = 1
let b: boolean = false
let s: string = 's'
let undef: undefined = undefined
let nul: null = null
let any: any = 'any' // 任意类型
let union: string | number // 联合类型
function v (): void {
  console.log('void')
}
function error (message: string): never {
    throw new Error(message);
}

let n: number = '1' // Type '"1"' is not assignable to type 'number'.
```
&#160; &#160; &#160; &#160;赋值时必须符合:右边指定的类型，默认情况下undefined和null是任意类型的子类型，实际项目中建议在tsconfig中设置strictNullChecks: true
<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html" target="_blank">->详细文档</a>

#### 类型推论
``` typescript
let n = 1
n = '1'
// 等价于
let n: number = 1
n = '1'

let n
n = '1'
// 等价于
let n: any
n = '1'
```
&#160; &#160; &#160; &#160;当没有明确指定类型时，会按照声明变量时的赋值推测

#### 接口(对象类型)
``` typescript
interface Person {
  readonly id: number // 只能在变量声明时赋值
  name: string
  age?: number // 可选
  [propName: string]: any // 任意属性
}
```
``` typescript
interface Person {
  name: string,
  age: number
}
let jay = {
  name: 'Jay',
  age: 40,
  major: 'music'
}
function printPerson (p: Person): void {
  console.log(p)
}
printPerson(jay) // ok
printPerson({
  name: 'Jay',
  age: 40,
  major: 'music'
}) // error
// Argument of type '{ name: string; age: number; major: string; }' is not assignable to parameter of type 'Person'.
// Object literal may only specify known properties, and 'major' does not exist in type 'Person'.
```
&#160; &#160; &#160; &#160;ts中的接口有多种功能，对象类型是其中之一，用来规定对象的成员结构必须是接口的超集。但是对待Object literal(对象字面量)时，必须严格保证成员结构完全相同。
> &#160; &#160; &#160; &#160;Object literals get special treatment and undergo excess property checking when assigning them to other variables, or passing them as arguments. If an object literal has any properties that the “target type” doesn’t have, you’ll get an error.

#### 数组(三种方式)
``` typescript
// 数组 type[]
let arr1: number[]
// 数组泛型 Array<elemType>
let arr2: Array<number>
// 数组接口
interface NumberArray {
  [index: number]: number
}
let arr = [0, 1, 2]
```

#### 函数(三种方式)
``` typescript
// 函数声明
function sum1 (x: number, y: number): number {
  return x + y
}
// 函数表达式 (输入类型)=>输出类型
let sum2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}
// 函数表达式 接口
interface Sum {
  (x: number, y?: number): number
}
let sum3: Sum = function (x: number, y?: number): number {
  return x + (y || 0)
}
```
#### 类型断言(两种方式)
``` typescript
let sth: any = "this is a string"
let strLength: number = (sth as string).length

let sth: any = "this is a string"
let strLength: number = (<string>sth).length
```

### 参考
[官方教程][1]

[1]: https://www.tslang.cn/docs/home.html


