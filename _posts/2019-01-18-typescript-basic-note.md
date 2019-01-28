---
title:  "Typescript学习笔记--基础篇"
date:   2018-01-18 14:24:00
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
TS中的函数类型
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
当引用第三方库时，比如jQuery，它暴露了全局变量$，我们要TS规范$方法，这时需要引用jQuery的声明文件，此外TS提供了一系列浏览器环境的全局对象（JS的内置对象，DOM和BOM等）[声明文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)

##### 全局变量声明
``` ts
// jQuery.d.ts
declare function $ (str: string): object
```
``` ts
/// <reference path='jQuery.d.ts'/>
// 如果不先declare，TS会提示(Cannot find name '$'.)
let $title = $('#title')
```
##### 模块声明
上面举了jQuery全局变量$的例子，再来想象另一种场景，我们需要引入node的path模块，并且要规范其类型

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
当外部模块为non-javascript时
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
// math-lib.d.ts
export function isPrime (x: number): boolean
export as namespace mathLib // 暴露global var，但是只能在非模块文件(没有import和export)中使用，否则会报错

// index.js
import { isPrime } from "math-lib";
isPrime(2)
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
    "noImplicitAny": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "strictBindCallApply": true,
    "strictNullChecks": true, // 决定null和undefined是否是其他类型的子类型
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true // 决定class中的变量必须初始化赋值或在构造函数中赋值
  }
}
```
春节期间更新TS+Vue实战

### FAQ
``` ts
// map.ts
import { Observable } from "./observable";
declare module "./observable" {
  // 这里为什么没有export，declare module中export究竟作用是什么
    interface Observable<T> {
        map<U>(f: (x: T) => U): Observable<U>;
    }
}
Observable.prototype.map = function (f) {
    // ... another exercise for the reader
}
// consumer.ts
import { Observable } from "./observable";
import "./map";
let o: Observable<number>;
o.map(x => x.toFixed());
```
declare global是什么
return class extends SuperClass { /* ... */ }
'arg is Array<any>'
this类型
https://www.tslang.cn/docs/handbook/declaration-merging.html底部
三斜杆和import的区别
``` ts
// myModules.d.ts
// In a .d.ts file or .ts file that is not a module:
declare module "SomeModule" {
    export function fn(): string;
}

// myOtherModule.ts
/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";
```



### 参考
[官方教程](https://www.tslang.cn/docs/home.html)
