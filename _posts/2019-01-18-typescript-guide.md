---
title:  "Typescript导读"
date:   2018-01-03 14:24:00
categories: [blog]
tags: [typescript]
---
> 对于想要快速上手Typescript的小伙伴来说，官方文档太长了，因此我把重要知识点做了汇总，每个知识点配合一个例子和辅助性文字，尽可能缩减描述篇幅，所以此文不会去穷举各种应用场景，只会介绍基本用法。

### Typescript简介
&#160; &#160; &#160; &#160;大家应该都听说过Typescript是Javascript的超集。总的来说呢，它是一个框架，一个编译期框架，而非运行时框架，也就是说不管平时写法变了多少，最终输出的依然是标准js，它主要是给JS提供了类型系统，为JS注入了很多面向对象的思想，顺带把转译ECMAScript 6+的事也做了。

### 知识点汇总
#### 类型系统
> [基本类型](http://www.typescriptlang.org/docs/handbook/basic-types.html)
[进阶类型](http://www.typescriptlang.org/docs/handbook/advanced-types.html)  
默认情况下undefined和null是任意类型的子类型，实际项目中建议在tsconfig中设置strictNullChecks: true或strict: true  
``` typescript
let n: number = 1
let b: boolean = false
let s: string = 's'
let undef: undefined = undefined
let nul: null = null
let any: any = 'any' // 任意类型
let union: string | number // 联合类型
let easing: 'ease-in' | 'ease-out' | 'ease-in-out'
function v (): void {
  console.log('void')
}
function error (message: string): never {
  throw new Error(message);
}
// (K extends keyof T)表示K必须是T的keys中的一员
function getProperty<T, K extends keyof T> (o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

let n: number = '1' // Type '"1"' is not assignable to type 'number'.
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
``` ts
// 类型别名
type Name = string
type NameObj = { name: string }
// 具体值
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out' | 1
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName (n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n
  } else {
    return n()
  }
}
```
``` ts
interface Maper<T> {
  [key: string]: T
}
let obj: Maper<number>
obj = { 'age': 1 }
let keys: keyof Maper<number> // 相当于keys: string
keys = 'age'
let value: Maper<number>['foo']// 相当于value: number
value = 1
```
``` ts
interface Person {
  name: string,
  age: number
}
type Readonlyer<T> = {
    readonly [P in keyof T]: T[P]
}
type Partialer<T> = {
    [P in keyof T]?: T[P]
}
type PersonPartial = Partialer<Person>
// 相当于
type PersonPartial = {
  name?: string,
  age?: number
}
type ReadonlyPerson = Readonlyer<Person>
// 相当于
type ReadonlyPerson = {
  readonly name: string,
  readonly age: number
}
```
``` ts
// extends表示K继承T，类继承大家都能理解
type Picker<T, K extends keyof T> = {
    [P in K]: T[P];
}
// (K extends string)表示K继承string，也就是说最终值满足K就一定满足string，满足string却不一定满足K
type Recorder<K extends string, T> = {
    [P in K]: T;
}
type ThreeStringProps = Recorder<'prop1' | 'prop2' | 'prop3', string>
let three: ThreeStringProps = {
  prop1: 'a',
  prop2: 'b',
  prop3: 'c'
}
```
``` ts
// 条件类型(T extends U ? X : Y)
// 条件类型(T extends U ? X : Y)和联合类型(X | Y)的最终结果都是X和Y的其中之一
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;  // "string"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;  // "object"
```
``` ts
// 推断infer
// 不管怎么推断U的类型都不能满足(T extends { a: infer U, b: infer U })时走never路线
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never
type T10 = Foo<{ a: string, b: string }> // string
type T11 = Foo<{ a: string, b: number }> // string | number
```

#### 类型推论
> 当没有明确指定类型时，会按照声明变量时的赋值推测
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

#### 接口
``` typescript
// 接口可以作为对象类型
interface Person {
  readonly id: number // 只能在变量声明时赋值
  name: string
  age?: number // 可选
  [propName: string]: any // 任意属性
}
```
&#160; &#160; &#160; &#160;对象字面量的特别处理
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
interface Alarm {
  alert ()
}
interface Light {
  lightOn ()
  lightOff ()
}
// 接口可以被class实现
class Car implements Alarm, Light {
  alert () {
    console.log('Car alert')
  }
  lightOn () {
    console.log('Car light on')
  }
  lightOff () {
    console.log('Car light off')
  }
}
```

#### 数组（三种方式）
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

#### 函数（三种方式）
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

#### 类型断言（两种方式）
``` typescript
let sth: any = "this is a string"
let strLength: number = (sth as string).length

let sth: any = "this is a string"
let strLength: number = (<string>sth).length
```

#### 元组
``` typescript
let a: [string, number]
a = ['type', 10] // OK
a = [10, "type"] // Error

// 超出元组范围时，相当于联合类型a[3]: string|number
a[3] = 'script' // OK
a[3] = true // Error
```

#### 枚举
``` typescript
enum Color {Red, Green, Blue} // 默认从0自增
// 转译后
var Color;
(function (Color) {
  Color[Color["Red"] = 0] = "Red"
  Color[Color["Green"] = 1] = "Green"
  Color[Color["Blue"] = 2] = "Blue"
})(Color || (Color = {}))

enum Color {Red = 1, Green, Blue = 5, Black} // 自动在自定义赋值后自增
// 转译后
var Color
(function (Color) {
  Color[Color["Red"] = 1] = "Red"
  Color[Color["Green"] = 2] = "Green"
  Color[Color["Blue"] = 5] = "Blue"
  Color[Color["Black"] = 6] = "Black"
})(Color || (Color = {}))
```

#### 类
> TS为类增加了public(default)，protected，private，readonly修饰，其他和[ES6+](http://es6.ruanyifeng.com/#docs/class)中没有差异。
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

#### 抽象类
> abstract只能修饰类，方法，setter&getter，变量声明，且在某抽象类的衍生类中必须实现被abstract修饰的成员，行为与java类似。
``` typescript
abstract class Animal {
  abstract a: string
  abstract makeSound(): void
  move(): void {
    console.log("roaming the earth...")
  }
}
```

#### 泛型
> 泛型作用是可以用来动态规定类型，[详细文档](http://www.typescriptlang.org/docs/handbook/generics.html)

``` typescript
function identity<T> (arg: T): T {
  return arg;
}
```

#### 方法重载&类型合并
> TS的强类型的初衷是提高代码可读性，减少代码风险。(2)比(1)多了2行代码，却提高了代码可读性
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

#### tsconfig配置
> [详细文档](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)，这里主要讲一下strict相关配置
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

#### 声明文件
> 当引用第三方库时，比如jQuery，它暴露了全局变量$，我们要TS规范$方法，这时需要引用jQuery.d.ts文件，此外TS提供了一系列浏览器环境的全局对象（JS的内置对象，DOM和BOM等）[声明文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)
``` ts
declare function $ (str: string): object
```

#### 三斜杠指令

#### Modules

#### Namespaces

#### Decorators

#### JSX

#### 类型兼容
> [详细文档](http://www.typescriptlang.org/docs/handbook/type-compatibility.html)

### 参考
[官方教程](https://www.tslang.cn/docs/home.html)
