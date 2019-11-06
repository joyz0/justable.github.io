---
title: "Typescript学习笔记--v3.7"
date: 2019-11-06 16:15:00
categories: [blog]
tags: [typescript]
---

> https://devblogs.microsoft.com/typescript/announcing-typescript-3-7

### Optional Chaining

```ts
// Before
if (foo && foo.bar && foo.bar.baz) {
}
// After-ish
if (foo?.bar?.baz) {
}
```

### Nullish Coalescing

```ts
// Before
let x = foo ?? bar();
// After-ish
let x = (foo !== null && foo !== undefined) ?
    foo :
    bar();
```

### Assertion Functions

https://github.com/microsoft/TypeScript/pull/32695

```ts
// v3.7之前不会caught
// v3.7之后会caught
function yell(str) {
  // assert是node的断言函数，如果参数是false，会throw an AssertionError
  assert(typeof str === "string");
  return str.toUppercase();
  // Oops! We misspelled 'toUpperCase'.
  // TypeScript could't caught this!
}
```

```ts
// v3.7之前可以这么处理（类型推论），但不方便
function yell(str) {
  if (typeof str !== "string") {
    throw new TypeError("str should have been a string.");
  }
  // Error caught!
  return str.toUppercase();
}
```

```ts
// v3.7后增加asserts value语法，可以告知ts value的类型
declare function assert(value: unknown): asserts value;
declare function assertIsArrayOfStrings(obj: unknown): asserts obj is string[];
```
