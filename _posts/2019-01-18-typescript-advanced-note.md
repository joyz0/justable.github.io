---
title:  "Typescript学习笔记--进阶篇"
date:   2018-01-28 13:06:00
categories: [blog]
tags: [typescript]
---

### 引言
> 本篇主要补充了些刚上手TS时不需要掌握的知识点，介绍下如何搭配Vue进行使用。

### 扩展知识点
- 进阶类型
- 类型保护
- Decorators
- JSX
- 类型兼容
- JSDoc注解

#### 进阶类型
``` ts
// (K extends keyof T)表示K必须是T的keys中的一员
function getProperty<T, K extends keyof T> (o: T, name: K): T[K] {
  return o[name] // o[name] is of type T[K]
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
    [P in K]: T[P]
}
// (K extends string)表示K继承string，也就是说最终值满足K就一定满足string，满足string却不一定满足K
type Recorder<K extends string, T> = {
    [P in K]: T
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
    "object"
type T0 = TypeName<string>  // "string"
type T1 = TypeName<"a">  // "string"
type T2 = TypeName<true>  // "boolean"
type T3 = TypeName<() => void>  // "function"
type T4 = TypeName<string[]>  // "object"
```
``` ts
// 推断infer
// 不管怎么推断U的类型都不能满足(T extends { a: infer U, b: infer U })时走never路线
type Foo<T> = T extends { a: infer U, b: infer U } ? U : never
type T10 = Foo<{ a: string, b: string }> // string
type T11 = Foo<{ a: string, b: number }> // string | number
```

#### 类型保护
> 类型保护可以让我们更加简单的使用联合类型

``` ts
class Bird {
  fly() {}
  layEggs() {}
}
class Fish {
  swim() {}
  layEggs() {}
}
function getSmallPet (): Fish | Bird {
  return {
    fly: function() {},
    layEggs: function() {}
  }
}
let pet = getSmallPet()
function isFish (pet: Fish | Bird) {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  // 此处会报错
  pet.swim()
} else {
  // 此处会报错
  pet.fly()
}
```
三种解决方法
1. 类型断言
``` ts
// ...
let pet = getSmallPet();
if ((<Fish>pet).swim) {
  (<Fish>pet).swim()
} else {
  (<Bird>pet).fly()
}
```
2. parameterName is Type
``` ts
let pet = getSmallPet()
function isFish (pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
```
3. instanceof/typeof
``` ts
let pet = getSmallPet()
if (pet instanceof Fish) {
  pet.swim()
} else {
  pet.fly()
}
```

#### Decorators
> 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。[详细文档](http://es6.ruanyifeng.com/#docs/decorator)

``` ts
// tsconfig.json
// 开启装饰器特性
{
  'compilerOptions': {
    'target': 'ES5',
    'experimentalDecorators': true
  }
}
```

#### JSX
> [详细文档](http://www.typescriptlang.org/docs/handbook/jsx.html)

#### 类型兼容
> [详细文档](http://www.typescriptlang.org/docs/handbook/type-compatibility.html)

#### JSDoc注解
> [详细文档](https://github.com/Microsoft/TypeScript/wiki/JSDoc-support-in-JavaScript)

### 参考
[官方教程](https://www.tslang.cn/docs/home.html)
