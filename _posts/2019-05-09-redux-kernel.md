---
title:  "Redux Kernel"
date:   2019-05-09 14:48:00
categories: [blog]
tags: [redux]
---

redux默认是不支持async的，看节选自'/src/createStore.js'的一段源码
```js
function createStore(reducer, preloadedState, enhancer) {
  let currentReducer = reducer
  let currentState = preloadedState
  function dispatch(action) {
    // action 只能是纯对象，如果要支持函数，就得用第三方middleware
    if (!isPlainObject(action)) {
      throw new Error(
        'Actions must be plain objects. ' +
          'Use custom middleware for async actions.'
      )
    }
    // reducer中不能有async方法，比如setTimeout，否则最终赋给currentState的值会和预期不符
    currentState = currentReducer(currentState, action)
  }
}
```
假如在reducer增加了setTimeout，看下例，当action.type === 'NEXT'时，最终return的是undefined
```js
const reducer = function (state, action) {
  if (action.type === 'NEXT') {
    setTimeout(() => {
      return ++state
    }, 1000)
  } else if (action.type === 'PRE') {
    return --state
  }
}
```
action不能是函数，reducer又不能处理async，说明redux默认无法支持async开发，因此，我们需要像redux-thunk这样的middleware，它使得dispatch方法可以接受一个函数形式的action，这样我们可以在这函数中执行异步请求，最终的效果是让currentState = currentReducer(currentState, action)延迟到异步回掉函数中执行。