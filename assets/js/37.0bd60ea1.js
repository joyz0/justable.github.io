(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{289:function(t,s,a){"use strict";a.r(s);var n=a(28),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造器"}},[t._v("#")]),t._v(" 构造器")]),t._v(" "),a("ul",[a("li",[t._v("const proxy = new Proxy(target, handler: ProxyHandler)")])]),t._v(" "),a("p",[t._v("target 可以是任何类型的对象，包括原生数组，函数，甚至另一个代理；handler 是一个对象，其属性是当执行一个操作时定义代理的行为的函数。")]),t._v(" "),a("h3",{attrs:{id:"handler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handler"}},[t._v("#")]),t._v(" handler")]),t._v(" "),a("p",[t._v("详情请见"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("下面的 target 指代被代理方")]),t._v(" "),a("ul",[a("li",[t._v("getPrototypeOf(target): object || null")])]),t._v(" "),a("p",[t._v("在读取代理对象的原型时触发，比如 Object.getPrototypeOf(proxy)等")]),t._v(" "),a("ul",[a("li",[t._v("setPrototypeOf(target, prototype): boolean")])]),t._v(" "),a("p",[t._v("在设置代理对象的原型时触发，比如 Object.setPrototypeOf(proxy, null)")]),t._v(" "),a("ul",[a("li",[t._v("isExtensible(target): boolean")])]),t._v(" "),a("p",[t._v("在判断一个代理对象是否是可扩展时触发，比如 Object.isExtensible(proxy)")]),t._v(" "),a("ul",[a("li",[t._v("preventExtensions(target): boolean")])]),t._v(" "),a("p",[t._v("在让一个代理对象不可扩展时触发，比如 Object.preventExtensions(proxy)")]),t._v(" "),a("ul",[a("li",[t._v("getOwnPropertyDescriptor(target, prop): object || undefined")])]),t._v(" "),a("p",[t._v('在获取代理对象某个属性的属性描述时触发，比如 Object.getOwnPropertyDescriptor(proxy, "foo")')]),t._v(" "),a("ul",[a("li",[t._v("defineProperty(target, property, descriptor): boolean")])]),t._v(" "),a("p",[t._v('在定义代理对象某个属性时的属性描述时触发，比如 Object.defineProperty(proxy, "foo", {})')]),t._v(" "),a("ul",[a("li",[t._v("has(target, prop): boolean")])]),t._v(" "),a("p",[t._v('在判断代理对象是否拥有某个属性时触发，比如"foo" in proxy')]),t._v(" "),a("ul",[a("li",[t._v("get(target, property, receiver: Proxy): any")])]),t._v(" "),a("p",[t._v("在读取代理对象的某个属性时触发，比如 proxy.foo，注意 Map、Set、WeakMap、WeakSet 的 api 都会触发 get，但数组的不会")]),t._v(" "),a("ul",[a("li",[t._v("set(target, property, value, receiver: Proxy): boolean")])]),t._v(" "),a("p",[t._v("在给代理对象的某个属性赋值时触发，比如 proxy.foo = 1，给数组赋值也会触发，比如 proxy[0]=1、proxy.push(1)，key 等于数组的下标，注意 proxy.push 会先触发 get，且 key=push")]),t._v(" "),a("ul",[a("li",[t._v("deleteProperty(target, property): boolean")])]),t._v(" "),a("p",[t._v("在删除代理对象的某个属性时触发，即使用 delete 运算符，比如 delete proxy.foo")]),t._v(" "),a("ul",[a("li",[t._v("handler.ownKeys(target): object")])]),t._v(" "),a("p",[t._v("比如 Object.getOwnPropertyNames 和 Object.getOwnPropertySymbols")]),t._v(" "),a("ul",[a("li",[t._v("handler.apply(target, context, argumentsList): any")])]),t._v(" "),a("p",[t._v("函数调用时触发，比如 func.call()和 func.apply()")]),t._v(" "),a("ul",[a("li",[t._v("handler.construct(target, argumentsList, newTarget: Proxy): object")])]),t._v(" "),a("p",[t._v("new 运算符时触发")]),t._v(" "),a("h2",{attrs:{id:"创建可撤销的代理对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建可撤销的代理对象"}},[t._v("#")]),t._v(" 创建可撤销的代理对象")]),t._v(" "),a("ul",[a("li",[t._v("const revocableProxy: { proxy, revoke: Function } = Proxy.revocable(target, handler)")])]),t._v(" "),a("p",[t._v("revoke 是撤销方法，调用的时候不需要加任何参数，就可以撤销掉和它一起生成的那个代理对象。")]),t._v(" "),a("p",[t._v("例子")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" revocable "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revocable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" revocable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[[foo]]"')]),t._v("\nrevocable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抛出 TypeError")]),t._v("\nproxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 还是 TypeError")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 又是 TypeError")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"，因为 typeof 不属于可代理操作')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"思考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),a("h3",{attrs:{id:"思考一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考一"}},[t._v("#")]),t._v(" 思考一")]),t._v(" "),a("p",[t._v("Proxy 只能创建一层代理，如何实现嵌套代理，比如下例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" receiver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobserved"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 怎么才能输出2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);