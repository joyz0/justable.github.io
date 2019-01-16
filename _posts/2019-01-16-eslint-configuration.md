---
title:  "ESLint配置"
date:   2019-01-06 14:10:00
categories: [blog]
tags: [ESLint]
---
> ESLint所有配置项汇总

### 两种配置方式
1. Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中
2. Configuration Files - 使用单独的配置文件或在 package.json 文件里的 eslintConfig 字段中配置

### 完整的配置选项(.eslintrc.json)
``` javascript
{
	// 告知eslint是否要继续从父目录寻找配置文件，true表示停止在父级目录中寻找
	"root": true,
	// 指定解析器
	"parser": "esprima",
	// 解析器选项，所有语言选项默认都是 false
	"parserOptions": {
		// 想要使用的 ECMAScript 版本
    "ecmaVersion": 6,
    // script(default)/module
    "sourceType": "module",
    // 想使用的额外的语言特性
    "ecmaFeatures": {
    	// 允许在全局作用域下使用 return 语句
    	"globalReturn": true,
    	// 启用全局 strict mode
    	"impliedStrict": true,
    	// 启用 JSX
      "jsx": true,
      // 启用实验性的 object rest/spread properties 支持({...rest})，该选项在未来将被移除
      "experimentalObjectRestSpread": true
    }
	},
	// 环境定义了一组预定义的全局变量
	"env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  // 指定全局变量，应对no-undef 规则的警告
  "globals": {
  	// 可重写
    "var1": true,
    // 只读
    "var2": false
  },
  // 使用第三方插件
  "plugins": [
    "plugin1",
    "eslint-plugin-plugin2"
  ],
  // 
  "rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"]
  },
  // 添加共享设置,它将提供给每一个将被执行的规则
  "settings": {
    "sharedData": "Hello"
  },
  // [string|array]从基础配置中继承已启用的规则,如果是数组后面继承前面的
  "extends": "eslint:recommended",
  // 配置规则，继承或覆盖重复规则
  "rules": {},
  // 为某些文件制定特殊规则，配置同上(除了extends、overrides 和 root)
  "overrides": [
    {
      "files": [ "bin/*.js", "lib/*.js" ],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": [ 2, "single" ]
      }
    }
  ]
}
```

### parser选项
&#160; &#160; &#160; &#160;指定解析器，默认用的是Espree，如需使用其他parser，必须符合一些条件：
1. 它必须是本地安装的一个 npm 模块
2. 它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）
3. 它必须产出兼容 Esprima 的 AST 和 token 对象
以下解析器与 ESLint 兼容：
- Esprima
- Babel-ESLint - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。
- typescript-eslint-parser(实验) - 解析 TypeScript 文件。

### env选项
&#160; &#160; &#160; &#160;<a href="https://eslint.org/docs/user-guide/configuring#specifying-environments" target="_blank">配置环境</a>，环境并不是互斥的，所以你可以同时定义多个，如果你想在一个特定的插件中使用一种环境，确保提前在 plugins 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 / ，紧随着环境名，比如
``` javascript
{
  "plugins": ["example"]，
  "env": {
      "example/custom": true
  }
}
```

### globals选项
&#160; &#160; &#160; &#160;在配置了no-undef规则后，如果当前文件使用了未定义的变量，即使它是全局变量，ESLint也会发出警告，此选项就是来告诉ESLint哪些变量是全局的，不要提示警告。

### plugins选项
&#160; &#160; &#160; &#160;在使用插件之前，你必须使用 npm 安装它，配置的时候可以省略“eslint-plugin-”。由于 Node.js 的 require 函数的行为，全局安装的 ESLint 实例只能使用全局安装的 ESLint 插件，本地安装的版本，只能用 本地安装 的插件，不支持混合本地和全局插件。

### rules选项
<a href="https://eslint.org/docs/rules/" target="_blank">配置规则</a>
1. "off" 或 0 - 关闭规则
2. "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
3. "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
配置定义在插件中的一个规则的时候，你必须使用 插件名/规则ID 的形式，比如
``` javascript
{
  "plugins": ["example"]，
  "rules": {
      "example/rule1": "error"
  }
}
```

### 在文件内联注解局部控制代码规则
<a href="https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments" target="_blank">这里</a>

### plugins vs extends
&#160; &#160; &#160; &#160;plugins是对ESLint规则的扩展，extends是去继承一个规则集合。

### 配置的优先级
&#160; &#160; &#160; &#160;eslint的配置是有优先级的，离要检测的文件最近的.eslintrc文件优先级最高，然后才是父目录里的配置文件，比如
``` javascript
your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
```
&#160; &#160; &#160; &#160;lib/ 下面的所有文件将使用项目根目录里的 .eslintrc 文件作为它的配置文件。当 ESLint 遍历到 test/ 目录，your-project/.eslintrc 之外，它还会用到 your-project/tests/.eslintrc。所以 your-project/tests/test.js 是基于它的目录层次结构中的两个.eslintrc 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用
&#160; &#160; &#160; &#160;优先级从高到低
1. 内联配置
  1. /*eslint-disable*/ and /*eslint-enable*/
  2. /*global*/
  3. /*eslint*/
  4. /*eslint-env*/
2. 命令行选项
  1. --global
  2. --rule
  3. --env
  4. -c, --config
3. 项目级配置
  1. 和linted文件同目录的.eslintrc.* 或 package.json 文件
  2. 继续在父级目录寻找 .eslintrc 或 package.json文件，直到根目录（包括根目录）或直到发现一个有"root": true的配置
4. 如果不是1，3中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置

### eslintignore
&#160; &#160; &#160; &#160;可以在根目录下创建.eslintignore或在package.json中增加eslintIgnore

### 注意
&#160; &#160; &#160; &#160;对 JSX 语法的支持不代表对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法，官方推荐使用eslint-plugin-react  
&#160; &#160; &#160; &#160;同理支持 ES6 语法并不意味着支持新的 ES6 全局变量或类型（比如 Set 等新类型）。使用 { "parserOptions": { "ecmaVersion": 6 } } 来启用 ES6 语法支持；要额外支持新的 ES6 全局变量，使用 { "env":{ "es6": true } }(这个设置会同时自动启用 ES6 语法支持)。

