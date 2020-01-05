---
title:  "Redux Kernel"
date:   2019-05-09 14:48:00
categories: [blog]
tags: [redux]
---

redux默认是不支持async的，下面是节选自'/src/createStore.js'的一段源码
```js
function createStore(reducer, preloadedState, enhancer) {
  let currentReducer = reducer
  let currentState = preloadedState
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }
    return enhancer(createStore)(reducer, preloadedState)
  }
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

以redux-thunk为例  
```js
import thunk from 'redux-thunk'
import rootReducer from './reducers'
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)
```
redux-thunk的源码就这么短短几行
```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => (action => {
    if (typeof action === 'function') {
      // 如果action是函数，则执行一遍
      return action(dispatch, getState, extraArgument);
    }
    // 如果不是函数，则按原逻辑走，这个next就是redux原本的dispatch
    return next(action) // 递归出口
  }) // (3)
}
const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;
```
下面是'/src/applyMiddleware.js'的源码
```js
export default function applyMiddleware(...middlewares) {
  return createStore => (...args) => {
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }
    const middlewareAPI = {
      getState: store.getState,
      // 这里不直接dispatch: dispatch的原因是不想把dispatch暴露给用户
      dispatch: (...args) => dispatch(...args) // (1)这段代码隐藏这一段递归，这里的dispatch(右)=(2)
    }
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch) // (2)
    return {
      ...store,
      dispatch
    }
  }
}
```
上吗compose的功能是让一个成员是函数的数组，将最右函数的结果依从右到左的顺序赋值给左边的函数，主要是为了支持多个middleware，比如
```js
compose(a, b, c)(1)
// 等价于
a(b(c(1)))
```
applyMiddleware的功能简单来说就是我把redux默认的dispatch传给middleware，你middleware想怎么组合我的dispatch都可以，最后再把组合完的返还给我，我会把它覆盖到createStore的结果中。  