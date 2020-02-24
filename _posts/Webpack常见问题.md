1. 基于`webpack-chain`扩展的机制  
   `webpack-chain`是 webpack 的上层抽象，常见于脚手架项目，比如 umi，在 umi 内部先通过`webpack-chain`进行初始化默认配置，再把`webpack-chain`的 API 实例暴露给 umi 的使用者，使用者就可以在脚手架的默认配置基础上进一步自定义化配置。最终的配置信息可以通过

```js
const merge = require("webpack-merge");
const Config = require("webpack-chain");
const config = new Config();
merge(config, fn);
```
