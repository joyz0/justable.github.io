- React 中的 refs  
  支持两种方式：

  1. React.creatRef()或者 useRef()，两者都返回`{current:...}`对象
  2. `(element) => void`回调函数
  3. 字符串的使用方式会在未来的版本中去除，不推荐使用

- React.useRef() 和 React.createRef()/自定义对象`{current: ...}`的区别？  
  React.useRef() 每次都会返回相同的引用，而 React.createRef 每次渲染都会返回一个新的引用  
  下面例子可以更直观看出两者差异：

  ```jsx
  import { useState, useRef, createRef } from "react";
  const Test = props => {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef = useRef();
    const refFromCreateRef = createRef();

    if (!refFromUseRef.current) {
      refFromUseRef.current = renderIndex;
    }
    if (!refFromCreateRef.current) {
      refFromCreateRef.current = renderIndex;
    }

    return (
      <div>
        <p>renderIndex: {renderIndex}</p>
        <p>refFromUseRef: {refFromUseRef.current}</p>
        <p>refFromCreateRef: {refFromCreateRef.current}</p>
        <button onClick={() => setRenderIndex(prev => prev + 1)}>
          rerender
        </button>
      </div>
    );
  };
  ```

- 在 webpack 体系中，通常会使用 html-webpack-plugin 插件管理 html 模版，那么如何在 jsx/tsx 中动态修改 html 头部呢？  
  使用 react-helmet 组件

  ```tsx
  import { Helmet } from "react-helmet";

  <Helmet>
    <title>hello</title>
    <meta name="description" content="hello" />
  </Helmet>;
  ```

- 如何在 js/ts 文件中控制弹框，比如在 axios 的拦截器中弹异常框？  
  可以参考 antd 中 Notification 组件的做法，在拦截器中调用

  ```ts
  import { notification } from "antd";
  notification.error();
  ```

  Notification 组件实际是对 [rc-notification](https://github.com/react-component/notification/blob/master/src/Notification.tsx) 组件的包装，rc-notification 内部会在 newInstance 时调用 `ReactDOM.render(<Notification />, rootNode)`将弹框加入组件树中;

- baseUrl 配置在哪

- React.Suspense 的实现
  https://codepen.io/Justable/pen/PrbVXb
  Suspense 的子组件异常 throw promise -> Suspense componentDidCatch -> error resolved -> Suspence setState rerender -> 子组件 rerender -> 子组件显示数据

- static getDerivedStateFromProps()的应用
  当一个组件需要根据传入的 props 来更新内部 state 时，可以使用该方法

- getSnapshotBeforeUpdate()的应用
  https://codepen.io/Justable/pen/QXKXzR

- componentDidMount()中 setState()发生的重绘不再触发 componentDidMount()？
  当然，之后是触发 componentDidUpdate()

- 如何获取孙子组件的 ref

- React.memo 和 shouldComponentUpdate 的应用
  https://codepen.io/Justable/pen/LYYjJJN

- useMemo 的应用
  useMemo 会缓存函数的返回结果
  https://codepen.io/Justable/pen/zgmXZY

- useCallback 的应用
  useCallback 会缓存函数

- useRef 和普通对象{ current: null }的区别
  普通对象在每次组件 rerender 时会重新赋值，useRef 的返回值是不变的

- 对比 useMemo 和 useCallback
  useCallback(fn, deps) 相当于 useMemo(() => fn, deps)

- 对比 useState 和 useReducer
  多状态时用 useReducer 更利于维护，并且会合并更新

- React 是如何判断一个组件需要重绘的
  显式的 setState，props 改变，父组件重绘（如果并没有影响到子组件的 state 和 props，则不会重绘）

- useEffect 中的 setInterval 无法获取最新 state 问题
  主要由闭包导致，看 react-use 中的 useInterval
  https://codepen.io/Justable/pen/oNNbOWg

- 解决竞态问题
  https://codepen.io/Justable/pen/wvvzEav

- ReactDOM.unstable_batchedUpdates
  通常多个 setState 会被合并成一个之后执行协调和提交阶段，但是在 setTimeout、Promise.then 中的 setState 会立即执行协调和提交阶段，此时可以借助 ReactDOM.unstable_batchedUpdates 进行合并

- 在 vscode 中调试源码
  ```json
  {
    "version": "0.1.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Jest Entry",
        "program": "${workspaceRoot}/node_modules/.bin/jest",
        "args": [
          "${file}",
          "--config",
          "./scripts/jest/config.source.js",
          "--runInBand"
        ],
        "console": "integratedTerminal",
        "internalConsoleOptions": "neverOpen",
        "env": {
          "NODE_ENV": "development"
        }
      }
    ]
  }
  ```
