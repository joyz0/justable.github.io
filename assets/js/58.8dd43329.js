(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{312:function(s,t,a){"use strict";a.r(t);var n=a(28),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("ESLint 所有配置项汇总")])]),s._v(" "),a("h3",{attrs:{id:"两种配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两种配置方式"}},[s._v("#")]),s._v(" 两种配置方式")]),s._v(" "),a("ol",[a("li",[s._v("Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中")]),s._v(" "),a("li",[s._v("Configuration Files - 使用单独的配置文件或在 package.json 文件里的 eslintConfig 字段中配置")])]),s._v(" "),a("h3",{attrs:{id:"完整的配置选项-eslintrc-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整的配置选项-eslintrc-json"}},[s._v("#")]),s._v(" 完整的配置选项(.eslintrc.json)")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 告知eslint是否要继续从父目录寻找配置文件，true表示停止在父级目录中寻找")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定解析器")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"esprima"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析器选项，所有语言选项默认都是 false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"parserOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 想要使用的 ECMAScript 版本")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ecmaVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// script(default)/module")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 想使用的额外的语言特性")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ecmaFeatures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 允许在全局作用域下使用 return 语句")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"globalReturn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用全局 strict mode")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"impliedStrict"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用 JSX")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jsx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用实验性的 object rest/spread properties 支持({...rest})，该选项在未来将被移除")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"experimentalObjectRestSpread"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 环境定义了一组预定义的全局变量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定全局变量，应对no-undef 规则的警告")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"globals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可重写")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"var1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只读")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"var2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用第三方插件")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugin1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint-plugin-plugin2"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eqeqeq"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"quotes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"double"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 添加共享设置,它将提供给每一个将被执行的规则")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sharedData"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [string|array]从基础配置中继承已启用的规则,如果是数组后面继承前面的")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"eslint:recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置规则，继承或覆盖重复规则")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为某些文件制定特殊规则，配置同上(除了extends、overrides 和 root)")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overrides"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"files"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bin/*.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib/*.js"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"excludedFiles"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.test.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"quotes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"single"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br")])]),a("h3",{attrs:{id:"parser-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parser-选项"}},[s._v("#")]),s._v(" parser 选项")]),s._v(" "),a("p",[s._v("       指定解析器，默认用的是 Espree，如需使用其他 parser，必须符合一些条件：")]),s._v(" "),a("ol",[a("li",[s._v("它必须是本地安装的一个 npm 模块")]),s._v(" "),a("li",[s._v("它必须有兼容 Esprima 的接口（它必须输出一个 parse() 方法）")]),s._v(" "),a("li",[s._v("它必须产出兼容 Esprima 的 AST 和 token 对象\n以下解析器与 ESLint 兼容：")])]),s._v(" "),a("ul",[a("li",[s._v("Esprima")]),s._v(" "),a("li",[s._v("Babel-ESLint - 一个对 Babel 解析器的包装，使其能够与 ESLint 兼容。")]),s._v(" "),a("li",[s._v("typescript-eslint-parser(实验) - 解析 TypeScript 文件。")])]),s._v(" "),a("h3",{attrs:{id:"env-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-选项"}},[s._v("#")]),s._v(" env 选项")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://eslint.org/docs/user-guide/configuring#specifying-environments",target:"_blank"}},[s._v("配置环境")]),s._v("，环境并不是互斥的，所以你可以同时定义多个，如果你想在一个特定的插件中使用一种环境，确保提前在 plugins 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 / ，紧随着环境名，比如")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example/custom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"globals-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#globals-选项"}},[s._v("#")]),s._v(" globals 选项")]),s._v(" "),a("p",[s._v("       在配置了 no-undef 规则后，如果当前文件使用了未定义的变量，即使它是全局变量，ESLint 也会发出警告，此选项就是来告诉 ESLint 哪些变量是全局的，不要提示警告。")]),s._v(" "),a("h3",{attrs:{id:"plugins-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-选项"}},[s._v("#")]),s._v(" plugins 选项")]),s._v(" "),a("p",[s._v("       在使用插件之前，你必须使用 npm 安装它，配置的时候可以省略“eslint-plugin-”。由于 Node.js 的 require 函数的行为，全局安装的 ESLint 实例只能使用全局安装的 ESLint 插件，本地安装的版本，只能用 本地安装 的插件，不支持混合本地和全局插件。")]),s._v(" "),a("h3",{attrs:{id:"rules-选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-选项"}},[s._v("#")]),s._v(" rules 选项")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://eslint.org/docs/rules/",target:"_blank"}},[s._v("配置规则")])]),s._v(" "),a("ol",[a("li",[s._v('"off" 或 0 - 关闭规则')]),s._v(" "),a("li",[s._v('"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)')]),s._v(" "),a("li",[s._v('"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)\n配置定义在插件中的一个规则的时候，你必须使用 插件名/规则 ID 的形式，比如')])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example/rule1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"在文件内联注解局部控制代码规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在文件内联注解局部控制代码规则"}},[s._v("#")]),s._v(" 在文件内联注解局部控制代码规则")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://cn.eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments",target:"_blank"}},[s._v("这里")])]),s._v(" "),a("h3",{attrs:{id:"plugins-vs-extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-vs-extends"}},[s._v("#")]),s._v(" plugins vs extends")]),s._v(" "),a("p",[s._v("       plugins 是对 ESLint 规则的扩展，extends 是去继承一个规则集合。")]),s._v(" "),a("h3",{attrs:{id:"配置的优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置的优先级"}},[s._v("#")]),s._v(" 配置的优先级")]),s._v(" "),a("p",[s._v("       eslint 的配置是有优先级的，离要检测的文件最近的.eslintrc 文件优先级最高，然后才是父目录里的配置文件，比如")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("your"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("project\n├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintrc\n├── lib\n│ └── source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n└─┬ tests\n  ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("eslintrc\n  └── test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("       lib/ 下面的所有文件将使用项目根目录里的 .eslintrc 文件作为它的配置文件。当 ESLint 遍历到 test/ 目录，your-project/.eslintrc 之外，它还会用到 your-project/tests/.eslintrc。所以 your-project/tests/test.js 是基于它的目录层次结构中的两个.eslintrc 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用\n       优先级从高到低")]),s._v(" "),a("ol",[a("li",[s._v("内联配置\n"),a("ol",[a("li",[s._v("/"),a("em",[s._v("eslint-disable")]),s._v("/ and /"),a("em",[s._v("eslint-enable")]),s._v("/")]),s._v(" "),a("li",[s._v("/"),a("em",[s._v("global")]),s._v("/")]),s._v(" "),a("li",[s._v("/"),a("em",[s._v("eslint")]),s._v("/")]),s._v(" "),a("li",[s._v("/"),a("em",[s._v("eslint-env")]),s._v("/")])])]),s._v(" "),a("li",[s._v("命令行选项\n"),a("ol",[a("li",[s._v("--global")]),s._v(" "),a("li",[s._v("--rule")]),s._v(" "),a("li",[s._v("--env")]),s._v(" "),a("li",[s._v("-c, --config")])])]),s._v(" "),a("li",[s._v("项目级配置\n"),a("ol",[a("li",[s._v("和 linted 文件同目录的.eslintrc.* 或 package.json 文件")]),s._v(" "),a("li",[s._v('继续在父级目录寻找 .eslintrc 或 package.json 文件，直到根目录（包括根目录）或直到发现一个有"root": true 的配置')])])]),s._v(" "),a("li",[s._v("如果不是 1，3 中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置")])]),s._v(" "),a("h3",{attrs:{id:"eslintignore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslintignore"}},[s._v("#")]),s._v(" eslintignore")]),s._v(" "),a("p",[s._v("       可以在根目录下创建.eslintignore 或在 package.json 中增加 eslintIgnore")]),s._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),a("p",[s._v("       对 JSX 语法的支持不代表对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法，官方推荐使用 eslint-plugin-react"),a("br"),s._v('\n       同理支持 ES6 语法并不意味着支持新的 ES6 全局变量或类型（比如 Set 等新类型）。使用 { "parserOptions": { "ecmaVersion": 6 } } 来启用 ES6 语法支持；要额外支持新的 ES6 全局变量，使用 { "env":{ "es6": true } }(这个设置会同时自动启用 ES6 语法支持)。')])])}),[],!1,null,null,null);t.default=r.exports}}]);