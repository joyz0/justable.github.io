---
title:  "Typescript学习笔记--基础篇"
date:   2019-01-28 15:14:00
categories: [blog]
tags: [typescript]
---

### Typescript简介
大家应该都听说过Typescript是Javascript的超集。总的来说呢，它是一个编译时框架，而非运行时框架，也就是说不管平时写法变了多少，最终输出的依然是标准js，它主要是给JS提供了类型系统，为JS注入了很多面向对象的思想，顺带把转译ECMAScript 6+的事也做了。

### 知识点汇总
- 常用类型
- 数组（三种方式）
- 元组
- 函数（三种方式）
- 接口
- 类
- 泛型
- 类型断言（两种方式）
- 类型推论
- 构造器类型
- 声明合并
- Modules
- Namespaces
- 声明文件
- 三斜杠指令
- tsconfig配置

#### 常用类型
TS中经常使用到的类型，默认情况下undefined和null是任意类型的子类型，实际项目中建议在tsconfig中设置strictNullChecks: true或strict: true，详情参考[基本类型](http://www.typescriptlang.org/docs/handbook/basic-types.html)
[进阶类型](http://www.typescriptlang.org/docs/handbook/advanced-types.html)

``` typescript
let n: number = 1
let b: boolean = false
let s: string = 's'
let undef: undefined = undefined
let nul: null = null
let any: any = 'any' // 任意类型
let union: string | number // 联合类型
let easing: 'ease-in' | 'ease-out' | 'ease-in-out'
// 表示render方法的每个入参都是any
function render (...args: any[]): void {}
function v (): void {
  console.log('void')
}
function error (message: string): never {
  throw new Error(message)
}
```
``` ts
interface Point {
  x: number
  y: number
}
interface Point3d extends Point {
  z: number
}
interface NamedPoint extends Point {
  name: string
}
// 交叉类型
let p: Point3d & NamedPoint = {
  x: 1,
  y: 1,
  z: 1,
  name: 'pt'
}
```

#### 数组（三种方式）
TS中的数组类型
``` typescript
// 数组 type[]
let arr1: number[]
let arr1: { n: number }[]
// 数组泛型 Array<elemType>
let arr2: Array<number>
let arr2: Array<{ n: number }>
// 数组接口
interface NumberArray {
  [index: number]: number
}
let arr: NumberArray = [0, 1, 2]
```

#### 元组
元组适用于定义数组每项类型
``` typescript
let a: [string, number]
a = ['type', 10] // OK
a = [10, "type"] // Error

// 超出元组范围时，相当于联合类型a[3]: string|number
a[3] = 'script' // OK
a[3] = true // Error
```

#### 函数（三种方式）
函数类型会比较入参类型和数量，返回类型，只要入参类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确，实际入参个数可以小于申明的个数。
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
剩余参数
``` ts
// ...restOfName: string[]表示剩余入参都是string
function buildName (firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ")
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie")
```
函数中的this还没理清除，详情参考[详细文档](https://www.tslang.cn/docs/handbook/functions.html)

#### 接口
TS中的接口可以充当对象类型，也可以作为一个规范被其他class实现（与其他面向对象语言类似）
``` typescript
// 接口可以作为对象类型
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
printPerson(jay) // OK
printPerson({ // Error 对象字面量必须保证变量完全一致
  name: 'Jay',
  age: 40,
  major: 'music'
})
```
``` typescript
interface Person {
  eat ()
}
interface Skill {
  singing ()
  dance ()
}
// 接口可以被class实现
class Jay implements Person, Skill {
  eat () {
    console.log('Jay is eating')
  }
  singing () {
    console.log('Jay is singing')
  }
  dance () {
    console.log('Jat is dancing')
  }
}
```

#### 类
TS为类增加了public(default)，protected，private，readonly修饰，其他和[ES6+](http://es6.ruanyifeng.com/#docs/class)中的没有差异。

``` typescript
class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8
  constructor (theName: string) {
    this.name = theName
  }
}
// 等价于
class Octopus {
  readonly numberOfLegs: number = 8
  constructor (readonly name: string) { // 构造函数的形参前如果有public，protected，private，readonly则会自动赋值
  }
}
```
``` typescript
class Greeter {
  static standardGreeting = "Hello, there"
  greeting: string
  greet () {
    if (this.greeting) {
      return "Hello, " + this.greeting
    }
    else {
      return Greeter.standardGreeting
    }
  }
}
let greeter1: Greeter // 类也可以被指定为一个类型
greeter1 = new Greeter() // OK
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = "Hey there!" // OK

let greeter2: Greeter = new greeterMaker() // OK
```

#### 泛型
泛型作用是可以用来动态规定类型，[详细文档](http://www.typescriptlang.org/docs/handbook/generics.html)

``` typescript
function identity<T> (arg: T): T {
  return arg
}
identity<string>('123') // OK
identity<string>(123) // Error
```
泛型约束
``` typescript
interface lenWise {
  length: number
}
function loggingIdentity<T extends lenWise>(arg: T): T {
  return arg
}
loggingIdentity(3) // Error T doesn't have .length
loggingIdentity({length:1, name:"zzy"}) // OK
```
泛型接口
``` ts
interface GenericIdentityFn<T> {
  (arg: T): T // h函数
}
function identity<T>(arg: T): T {
  return arg
}
let myIdentity: GenericIdentityFn<number> = identity
```
泛型默认值
```ts
interface Action<T = any> {
  type: T
}
interface AnyAction extends Action {
  [extraProps: string]: any
}
interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): T
}
```

#### 类型断言（两种方式）
``` typescript
let sth: any = "this is a string"
let strLength: number = (sth as string).length

let sth: any = "this is a string"
let strLength: number = (<string>sth).length
```

#### 类型推论
当没有明确指定类型时，会按照声明变量时的赋值推测

``` typescript
let n = 1
n = '1' // Error
// 等价于
let n: number = 1
n = '1'

let n
n = '1'
// 等价于
let n: any
n = '1'
```

#### 构造器类型
TS中构造器的类型，可以参考[stackoverflow.com](https://stackoverflow.com/questions/38311672/generic-and-typeof-t-in-the-parameters/38311757#38311757)

``` ts
// Example 1
interface ArrayConstructor {
  new (arrayLength?: number): any[]
  new <T>(arrayLength: number): T[]
  new <T>(...items: T[]): T[]
  (arrayLength?: number): any[]
  <T>(arrayLength: number): T[]
  <T>(...items: T[]): T[]
  isArray(arg: any): arg is Array<any>
  readonly prototype: Array<any>
}
// Example 2
class MyManager<T> {
  constructor(private cls: { new(): T }) {
    this.cls = cls
  }
  createInstance(): T {
    return new this.cls()
  }
}
class MyClass {}
let test = new MyManager(MyClass)
```

#### 声明合并
在多处的同名声明，TS最终会把它合成一个。TS的强类型的初衷是提高代码可读性，减少代码风险。(2)比(1)多了2行代码，却提高了代码可读性。关于TS的声明合并策略，可以参考[详细文档](https://www.tslang.cn/docs/handbook/declaration-merging.html)

``` typescript
// (1)
function parse (x: any): any {
  if (typeof x === 'string') {
    return JSON.parse(x)
  } else if (typeof x === 'object') {
    return JSON.stringify(x)
  }
}
// (2)
function parse (x: string): object
function parse (x: object): string
function parse (x: any): any {
  if (typeof x === 'string') {
    return JSON.parse(x)
  } else if (typeof x === 'object') {
    return JSON.stringify(x)
  }
}
```
``` typescript
interface Person {
  name: string
  say (x: string): string
}
interface Person {
  // name: number 这里会Error，重名变量必须保证类型一致
  age: number
  say (x: string, y: string): string
}
// 相当于
interface Person {
  name: string
  age: number
  say (x: string): string
  say (x: string, y: string): string
}
```

#### Modules
Module代表外部模块，TS支持ES6+和(commonjs/amd)两种导入导出方式，扩展阅读[TS的模块解析](https://www.tslang.cn/docs/handbook/module-resolution.html)，讲述模块路径解析机制，与node类似。

``` ts
// (1)ES6+
export {}
import * from 'module'
// (2)commonjs/amd
export = {}
import module = require('module')
```

#### Namespaces
Namespace代表内部模块，平时开发时，如果把所有变量都定义在根级，第一可阅读行差，第二会出现变量重名。这时就需要命名空间，TS中的namespace就是来解决这问题。

``` ts
interface StringValidator {
  regExp: RegExp
  resolve (str: string): boolean
}
class EmailValidator implements StringValidator {
  regExp: RegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  resolve (str: string): boolean {
    return this.regExp.test(str)
  }
}
class HanValidator implements StringValidator {
  regExp: RegExp = /^[\u4e00-\u9fa5]{0,}/
  resolve (str: string): boolean {
    return this.regExp.test(str)
  }
}
// 当验证类型越来越多时，用namespace优化为
namespace Validator {
  export interface StringValidator {
    regExp: RegExp
    resolve (str: string): boolean
  }
  export class EmailValidator implements StringValidator {
    regExp: RegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    resolve (str: string): boolean {
      return this.regExp.test(str)
    }
  }
  export class HanValidator implements StringValidator {
    regExp: RegExp = /^[\u4e00-\u9fa5]{0,}/
    resolve (str: string): boolean {
      return this.regExp.test(str)
    }
  }
}
// 或者分离到多个文件中
// StringValidator.d.ts
namespace Validator {
  export interface StringValidator {
    regExp: RegExp
    resolve (str: string): boolean
  }
}
// EmailValidator.d.ts
/// <reference path='StringValidator.d.ts' />
namespace Validator {
  export class EmailValidator implements StringValidator {
    regExp: RegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    resolve (str: string): boolean {
      return this.regExp.test(str)
    }
  }
}
// HanValidator.d.ts
/// <reference path='StringValidator.d.ts' />
namespace Validator {
  export class HanValidator implements StringValidator {
    regExp: RegExp = /^[\u4e00-\u9fa5]{0,}/
    resolve (str: string): boolean {
      return this.regExp.test(str)
    }
  }
}
// test.ts
/// <reference path='StringValidator.d.ts' />
/// <reference path='EmailValidator.d.ts' />
/// <reference path='HanValidator.d.ts' />
// TODO
```
namespace可以嵌套

``` ts
namespace Shapes {
  export namespace Polygons {
    export class Triangle { }
    export class Square { }
  }
}
import polygons = Shapes.Polygons
let sq = new polygons.Square()
```
Copying both the Type + Value
```ts
namespace importing {
    export class Foo { }
}
// 必须import，不能let/const，这涉及到Variable Declaration Space(VDS)和Type Declaration Space(TDS)的区别，let/const只能copy VDS，import 能 copy VDS + TDS
import Bar = importing.Foo;
var bar: Bar; // Okay
```
declare namespace可以用来声明第三方插件（非TS插件）的api，这里会和上面的declare module混淆，当通过模块加载器加载时用declare module，当页面用script标签加载时用declare namespace。
``` ts
// D3.d.ts
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection
      (element: EventTarget): Selection
    }
  }
  export interface Event {
    x: number
    y: number
  }
  export interface Base extends Selectors {
    event: Event
  }
}

declare var d3: D3.Base;
```

#### 声明文件
声明文件就是为已有的事物提供声明，来告知TS它的存在，TS默认只能识别js/ts/jsx/tsx文件，当引入模块时，比如node的path模块，此时就需要为其定义一个.d.ts文件，TS才能识别它，node的一系列模块都已在@types外部包中声明。此外TS提供了一系列浏览器环境的全局对象（JS的内置对象，DOM和BOM等）[声明文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)，另外要注意.d.ts文件的top level必须declare开头。
实际项目中，比如项目用到了react，我们需要安装@types/react，typescript会自动去查找并引入node_module/@type下的声明文件，无须手动导入申明。
https://github.com/Microsoft/TypeScript/issues/9725
https://stackoverflow.com/questions/38444279/how-should-i-use-types-with-typescript-2
``` ts
import * as React from 'react'
// 同时会把@types/react引入进来
```

##### 全局变量声明
当引用第三方库时，比如jQuery，它暴露了全局变量$，我们需要告知TS并规范$方法，这时需要引用jQuery的声明文件，
``` ts
// jQuery.d.ts
declare function $ (str: string): object
```
``` ts
// 此步非必须，d.ts文件会自动引入
/// <reference path='jQuery.d.ts'/>
// 如果不先declare，TS会提示(Cannot find name '$'.)
let $title = $('#title')
```
##### 模块声明
``` ts
// node.d.ts
// 简写模式，此时所以类型都为any
declare module 'path'
// 手写模式
declare module 'path' {
  export function normalize (p: string): string
  export function join (...paths: any[]): string
  export let sep: string
}
/// <reference path='node.d.ts'/>
// 如果不先declare，TS会提示(Cannot find module 'path'.)
import * as PATH from 'path'
let dist = PATH.join(__dirname, '/dist')
```
当外部模块为non-javascript时，作如下声明，TS就能识别此类文件了
``` ts
declare module '*.text' {
  const content: string
  export default content
}
declare module 'json!*' {
  const value: any
  export default value
}
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
import fileContent from 't.text'
import data from 'json!http://example.com/data.json'
import component from 'c.vue'
```
UMD模块
``` ts
export = React // (1)
export as namespace React // (2)
```
我们通常使用这种方式进行申明，(1) is used for CommonJS and AMD module systems. You have to match the export = React with import React = require('./React')，(2) creates a global variable so it can be used without importing, but you may still import it with the import { name } from "some-library" form of import。
[参考](https://www.e-learn.cn/content/wangluowenzhang/1066130)
``` ts
// math-lib.d.ts
export function isPrime (x: number): boolean
export as namespace mathLib // 暴露global var，但是只能在非模块文件(没有import和export)中使用，否则会报错？

// index.js
import { isPrime } from "math-lib";
isPrime(2) // OK
mathLib.isPrime(2) // Error: 'mathLib' refers to a UMD global, but the current file is a module.
```

#### 三斜杠指令
用来引入声明文件，新版本TS自动会引入声明文件[详细文档](https://www.tslang.cn/docs/handbook/triple-slash-directives.html)

``` ts
/// <reference path="node.d.ts"/>
```

#### tsconfig配置
[详细文档](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)，这里主要讲一下strict相关配置

``` typescript
{
  "compilerOptions": {
    "strict": true
  }
}
// 相当于
{
  "compilerOptions": {
    "noImplicitAny": true, // 在表达式和声明上有隐含的any类型时报错
    "noImplicitThis": true, // 当this表达式的值为any类型的时候，生成一个错误
    "alwaysStrict": true, // 以严格模式解析并为每个源文件生成"use strict"语句
    "strictBindCallApply": true, // 开启对bind&call&apply方法严格检测模式(new feature)
    "strictNullChecks": true, // 决定null和undefined是否是其他类型的子类型
    "strictFunctionTypes": true, // 禁用函数参数双向协变检查
    "strictPropertyInitialization": true // 决定class中的变量必须初始化赋值或在构造函数中赋值
  }
}
```

### FAQ
- return class extends SuperClass { /* ... */ }是什么意思？
其实就是return了一个匿名类

- declare global是什么？
https://www.tslang.cn/docs/handbook/declaration-merging.html底部
declare global使得我们无须import，可以直接使用
``` ts
// shim-tsx.d.ts
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
// any file
let elm: JSX.Element
```
- obj: any和obj: {}的区别
```ts
let obj: {} // 表示obj是个对象
obj = 1 // Ok
obj = true // Ok
obj = [] // Ok
obj = 'str' // Ok
obj = null // Error
obj = undefine // Error
```
- 三斜杆和import有什么区别？
``` ts
// node.d.ts
declare module 'path' {
  export function resolve(...args: string[]): string
}
// ins.ts
/// <reference path='node.d.ts' />
import {resolve} from 'path'
```
看上面例子，首先要明白declare是用来声明一个已有事物的，而非具体实现，在ins.ts中，如果没有reference引入（新版本TS不需要手动引入），TS会识别不了'path'。如此可以看出，reference负责引入声明，告诉TS'path'是个模块，import导入具体的path模块功能。

- 函数中的this

- TS中的this类型

- !:什么作用
[链接](https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci)
That's the non-null assertion operator. It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined." Sometimes the type checker is unable to make that determination itself.

- declare module/namespace有时有export有时没有
``` ts
// path.d.ts
declare module "path" {
  export function normalize(p: string): string
  export function join(...paths: any[]): string
  export var sep: string
}
// index.ts
import * as Path from "path"
```
上面是TS官网的一个例子，声明了path模块。
``` ts
// map.ts
import { Observable } from "./observable"
declare module "./observable" {
  interface Observable<T> {
    map<U>(f: (x: T) => U): Observable<U>
  }
}
Observable.prototype.map = function (f) {
  // TODO
}
// consumer.ts
import { Observable } from "./observable"
import "./map"
let o: Observable<number>
o.map(x => x.toFixed())
```
上面也是TS官网的一个例子，observable是外部库，并为observable扩展了一个map方法。  
这两个例子分开来看的时候能理解（其实是强行理解），放在一起就无法理解了，应该是我对"declare module"的语义没有完全理解。第一个有export第二个没有export？
突然有点理解了，"declare module"的语义对应ES6的模块，第一个例子normalize，join等都是path模块源码中的导出变量，故需要export，第二个例子目的是在Observable的原型中扩展一个map方法，并不是导出变量。

- react + ts实战
https://github.com/piotrwitek/react-redux-typescript-guide

### 参考
[官方教程](https://www.tslang.cn/docs/home.html)
[TypeScript Module Declaration Vs Augmentation](http://ideasintosoftware.com/typescript-module-augmentation-vs-declaration/)
[Typescript-Book](https://basarat.gitbooks.io/typescript/content/)
