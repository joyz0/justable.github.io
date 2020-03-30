(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(e,t,s){e.exports=s.p+"assets/img/1.b49ea04b.png"},224:function(e,t,s){e.exports=s.p+"assets/img/2.101a8933.png"},225:function(e,t,s){e.exports=s.p+"assets/img/3.dbf97399.png"},226:function(e,t,s){e.exports=s.p+"assets/img/4.5911c599.png"},227:function(e,t,s){e.exports=s.p+"assets/img/5.943e723e.png"},228:function(e,t,s){e.exports=s.p+"assets/img/6.76624c83.png"},229:function(e,t,s){e.exports=s.p+"assets/img/7.cf1cdec6.png"},230:function(e,t,s){e.exports=s.p+"assets/img/8.761fe475.png"},277:function(e,t,s){"use strict";s.r(t);var a=s(28),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文"),a("OutboundLink")],1)])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#引言"}},[e._v("引言")])]),a("li",[a("a",{attrs:{href:"#容器的属性"}},[e._v("容器的属性")]),a("ul",[a("li",[a("a",{attrs:{href:"#flex-direction"}},[e._v("flex-direction")])]),a("li",[a("a",{attrs:{href:"#flex-wrap"}},[e._v("flex-wrap")])]),a("li",[a("a",{attrs:{href:"#flex-flow"}},[e._v("flex-flow")])]),a("li",[a("a",{attrs:{href:"#justify-content"}},[e._v("justify-content")])]),a("li",[a("a",{attrs:{href:"#align-items"}},[e._v("align-items")])]),a("li",[a("a",{attrs:{href:"#align-content"}},[e._v("align-content")])])])]),a("li",[a("a",{attrs:{href:"#项目的属性"}},[e._v("项目的属性")]),a("ul",[a("li",[a("a",{attrs:{href:"#order"}},[e._v("order")])]),a("li",[a("a",{attrs:{href:"#flex-grow"}},[e._v("flex-grow")])]),a("li",[a("a",{attrs:{href:"#flex-shrink"}},[e._v("flex-shrink")])]),a("li",[a("a",{attrs:{href:"#flex-basis"}},[e._v("flex-basis")])]),a("li",[a("a",{attrs:{href:"#flex"}},[e._v("flex")])]),a("li",[a("a",{attrs:{href:"#align-self"}},[e._v("align-self")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),a("p",[e._v("Flex 布局使得一个框体内部的排版更为便捷，比如栅格排版，自适应分配长宽，垂直居中等，原来可能需要很多样式配合来完成，使用 flex，就变得更 native 了。")]),e._v(" "),a("p",[e._v("Flex 布局主要由两层结构实现，外层 container 和内层 item，当然内层 item 也可以是更内层的 container")]),e._v(" "),a("ul",[a("li",[e._v("容器：外层 container")]),e._v(" "),a("li",[e._v("项目：内层 item")]),e._v(" "),a("li",[e._v("主轴：item 的排列方向")]),e._v(" "),a("li",[e._v("交叉轴：与主轴垂直")])]),e._v(" "),a("h2",{attrs:{id:"容器的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[e._v("#")]),e._v(" 容器的属性")]),e._v(" "),a("ul",[a("li",[e._v("flex-direction")]),e._v(" "),a("li",[e._v("flex-wrap")]),e._v(" "),a("li",[e._v("flex-flow")]),e._v(" "),a("li",[e._v("justify-content")]),e._v(" "),a("li",[e._v("align-items")]),e._v(" "),a("li",[e._v("align-content")])]),e._v(" "),a("h3",{attrs:{id:"flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[e._v("#")]),e._v(" flex-direction")]),e._v(" "),a("p",[e._v("主轴的方向")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// row 自左向右\n// row-reverse 自右向左\n// column 自上而下\n// row 自下向上\nflex-direction: row(default) | row-reverse | column | column-reverse;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:s(223),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"flex-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[e._v("#")]),e._v(" flex-wrap")]),e._v(" "),a("p",[e._v("控制项目的换行规则，因为默认不换号，当项目的宽度之和大于容器的宽度时，会根据项目的一些属性决定实际宽度分配")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// nowrap 不换行\n// wrap 换行，新行在下方\n// wrap-reverse 换行，新行在上方\nflex-wrap: nowrap(default) | wrap | wrap-reverse;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[a("img",{attrs:{src:s(224),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[e._v("#")]),e._v(" flex-flow")]),e._v(" "),a("p",[e._v("是 flex-direction 和 flex-wrap 的缩写")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 默认 flex-flow: row nowrap\nflex-flow: <flex-direction> || <flex-wrap>;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"justify-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[e._v("#")]),e._v(" justify-content")]),e._v(" "),a("p",[e._v("主轴上的对齐方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("justify-content: flex-start(default) | flex-end | center | space-between | space-around;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(225),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"align-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[e._v("#")]),e._v(" align-items")]),e._v(" "),a("p",[e._v("交叉轴上的对齐方式")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// flex-start 交叉轴的起点对齐\n// flex-end 交叉轴的终点对齐\n// center 交叉轴的中点对齐\n// baseline 项目的第一行文字的基线对齐\n// stretch 如果项目未设置高度或设为auto，将占满整个容器的高度\nalign-items: flex-start | flex-end | center | baseline | stretch(default);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:s(226),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[e._v("#")]),e._v(" align-content")]),e._v(" "),a("p",[e._v("定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// flex-start 与交叉轴的起点对齐\n// flex-end 与交叉轴的终点对齐\n// center 与交叉轴的中点对齐\n// space-between 与交叉轴两端对齐，轴线之间的间隔平均分布\n// space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍\n// stretch 轴线占满整个交叉轴\nalign-content: flex-start | flex-end | center | space-between | space-around | stretch(default);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("img",{attrs:{src:s(227),alt:""}}),e._v("\n重点看上图的 stretch，从 item 设了高度和没设高度 auto 的区别可看出，stretch 的原理是将交叉轴根据行数平分(交叉轴长度/行数)成若干份，如果设了高度，就用真是高度，没设高度就填充单份高度。")]),e._v(" "),a("h2",{attrs:{id:"项目的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[e._v("#")]),e._v(" 项目的属性")]),e._v(" "),a("ul",[a("li",[e._v("order")]),e._v(" "),a("li",[e._v("flex-grow")]),e._v(" "),a("li",[e._v("flex-shrink")]),e._v(" "),a("li",[e._v("flex-basis")]),e._v(" "),a("li",[e._v("flex")]),e._v(" "),a("li",[e._v("align-self")])]),e._v(" "),a("h3",{attrs:{id:"order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[e._v("#")]),e._v(" order")]),e._v(" "),a("p",[e._v("定义项目的排列顺序。数值越小，排列越靠前，可以是负数，相同时依 dom 顺序。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("order: <integer>; // 0 default\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"flex-grow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[e._v("#")]),e._v(" flex-grow")]),e._v(" "),a("p",[e._v("定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。负数无效，浏览器视作默认值 0。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex-grow: <number>; // 0 default\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(228),alt:""}})]),e._v(" "),a("p",[e._v("注意放大比例是从剩余空间分配的，上图 item 最终实际宽度(px)：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("图一：")]),e._v(" "),a("ul",[a("li",[e._v("剩余宽度 restWidth = 300 - 3 × 50 = 150")]),e._v(" "),a("li",[e._v("红色宽度 redWidth = 1 / 3 × restWidth + 50 = 100")]),e._v(" "),a("li",[e._v("黄色宽度 yellowWidth = 2 / 3 × restWidth + 50 = 150")]),e._v(" "),a("li",[e._v("绿色宽度 greenWidth = 50")])])]),e._v(" "),a("li",[a("p",[e._v("图二：依次类推")])]),e._v(" "),a("li",[a("p",[e._v("图三：因为没有剩余宽度，发挥作用的是 flex-shrink")])])]),e._v(" "),a("h3",{attrs:{id:"flex-shrink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[e._v("#")]),e._v(" flex-shrink")]),e._v(" "),a("p",[e._v("定义了项目的缩小比例，即如果空间不足，该项目将缩小，flex-shrink 属性为 0 时项目不缩小，负数无效，浏览器视作默认值 1。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex-shrink: <number>; // 1 default\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(229),alt:""}})]),e._v(" "),a("p",[e._v("注意当 flex-shrink 属性为 0 的项目总宽度大于等于容器宽度时，即没有剩余空间分配时，其余 flex-shrink 属性不为 0 的项目宽度会缩小成刚好能够容纳内容，padding,margin 依然有效。上图 item 最终实际宽度(px)：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("图一：")]),e._v(" "),a("ul",[a("li",[e._v("剩余宽度：restWidth = 300 - 3 × 100 = 0")])])])]),e._v(" "),a("p",[e._v("所以 redWidth 和 yellowWidth 变成了能够容纳内容的最小宽度")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("图二：")]),e._v(" "),a("ul",[a("li",[e._v("剩余宽度：restWidth = 300 - 2 × 100 = 100")])])])]),e._v(" "),a("p",[e._v("所以 redWidth 和 yellowWidth 按照某种比例分配了 restWidth，分配策略还没弄清楚")]),e._v(" "),a("h3",{attrs:{id:"flex-basis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[e._v("#")]),e._v(" flex-basis")]),e._v(" "),a("p",[e._v("flex-grow 和 flex-shrink 都提到了剩余空间，其实就是根据这个属性计算的，它的默认值为 auto，即项目的本来大小。bootstrap4 的栅格系统就是用了这个属性替代了 bootstrap3 的 float:left+width%组合。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex-basis: <length> | auto; // auto default\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[e._v("#")]),e._v(" flex")]),e._v(" "),a("p",[e._v("是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。bootstrap4 的栅格系统用的是(0 0 %)")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(230),alt:""}})]),e._v(" "),a("h3",{attrs:{id:"align-self"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[e._v("#")]),e._v(" align-self")]),e._v(" "),a("p",[e._v("允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("align-self: auto | flex-start | flex-end | center | baseline | stretch;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);