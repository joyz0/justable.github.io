---
title:  "React Kernel"
date:   2019-04-17 14:28:00
categories: [blog]
tags: [react]
---

### 目录介绍
/packages 核心代码区  
/packages/react React  
/packages/react-dom ReactDOM  
/packages/shared 公共函数库  
/scripts 打包相关脚本  
/scripts/rollup/build.js 打包入口  
/scripts/rollup/bundles.js 打包配置  

### React
#### Component & PureComponent
/packages/react/src/ReactBaseClasses.js  
PureComponent的prototype比Component多了一个isPureReactComponent，仅此而已

#### createElement: (type, config, children) => ReactElement
/packages/react/src/ReactElement.js  
- 把config的变量转移给props
- 设置type.defaultProps给props
- 返回ReactElement对象
```js
interface ReactElement {
  $$typeof: REACT_ELEMENT_TYPE,
  type: type,
  key: key,
  ref: ref,
  props: props,
  _owner: owner
}
```
### ReactDOM
#### render: (element, container, callback) => legacyRenderSubtreeIntoContainer

### FAQ
- baseUrl配置在哪

- React.Suspense的实现
Suspense的子组件异常throw promise -> Suspense componentDidCatch -> error resolved -> Suspence setState rerender -> 子组件rerender -> 子组件显示数据
```jsx
class Suspense extends React.Component {
  state = {
    loading: false
  }
  componentDidCatch(error) {
    this.setState({ loading: true });
    error.then(() => {
      this.setState({ loading: false })
    });
  }
  render() {
    const { children, spinCb } = this.props;
    const { loading } = this.state;
    return loading ? spinCb('加载数据中，请稍后...') : children;
  }
}
const cached = {};
const createFetcher = (promiseTask) => {
  let ref = cached;
  return () => {
    const task = promiseTask();
    task.then(res => {
      ref = res
    });
    if (ref === cached) {
      throw task
    }
    return ref
  }
}
const ErrorComponent = () => {
  const getData = createFetcher(
    () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({name: 'Alice'});
        }, 3000);
      });
    }
  );
  return <h1>{getData().name}!</h1>
}
class App extends React.Component {
  render() {
    return (
      <Suspense>
          <ErrorComponent />
      </Suspense>
    );
  }
}
```