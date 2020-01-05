---
title:  "Flex布局使用总结"
date:   2018-12-08 15:04:23
categories: [blog]
tags: [flex]
---
> 所有内容均源自阮一峰老师的文章[Flex 布局教程：语法篇][1]，不过此总结都是结合平时使用的自我表述。

### 引言
Flex布局使得一个框体内部的排版更为便捷，比如栅格排版，自适应分配长宽，垂直居中等，原来可能需要很多样式配合来完成，使用flex，就变得更native了。

Flex布局主要由两层结构实现，外层container和内层item，当然内层item也可以是更内层的container

容器：外层container
项目：内层item
主轴：item的排列方向
交叉轴：与主轴垂直

### 容器的属性

 - flex-direction
 - flex-wrap
 - flex-flow
 - justify-content
 - align-items
 - align-content

#### flex-direction
主轴的方向
```
// row 自左向右
// row-reverse 自右向左
// column 自上而下
// row 自下向上
flex-direction: row(default) | row-reverse | column | column-reverse;
```
![](/images/2018-12-08-flex-summary/1.png)

#### flex-wrap
控制项目的换行规则，因为默认不换号，当项目的宽度之和大于容器的宽度时，会根据项目的一些属性决定实际宽度分配
```
// nowrap 不换行
// wrap 换行，新行在下方
// wrap-reverse 换行，新行在上方
flex-wrap: nowrap(default) | wrap | wrap-reverse;
```
![](/images/2018-12-08-flex-summary/2.png)

#### flex-flow
是flex-direction和flex-wrap的缩写
```
// 默认 flex-flow: row nowrap
flex-flow: <flex-direction> || <flex-wrap>;
```
#### justify-content
主轴上的对齐方式
```
justify-content: flex-start(default) | flex-end | center | space-between | space-around;
```
![](/images/2018-12-08-flex-summary/3.png)

#### align-items
交叉轴上的对齐方式
```
// flex-start 交叉轴的起点对齐
// flex-end 交叉轴的终点对齐
// center 交叉轴的中点对齐
// baseline 项目的第一行文字的基线对齐
// stretch 如果项目未设置高度或设为auto，将占满整个容器的高度
align-items: flex-start | flex-end | center | baseline | stretch(default);
```

![](/images/2018-12-08-flex-summary/4.png)

#### align-content
定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
```
// flex-start 与交叉轴的起点对齐
// flex-end 与交叉轴的终点对齐
// center 与交叉轴的中点对齐
// space-between 与交叉轴两端对齐，轴线之间的间隔平均分布
// space-around 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
// stretch 轴线占满整个交叉轴
align-content: flex-start | flex-end | center | space-between | space-around | stretch(default);
```

![](/images/2018-12-08-flex-summary/5.png)
重点看上图的stretch，从item设了高度和没设高度/auto的区别可看出，stretch的原理是将交叉轴根据行数平分(交叉轴长度/行数)成若干份，如果设了高度，就用真是高度，没设高度就填充单份高度。

### 项目的属性

 - order
 - flex-grow
 - flex-shrink
 - flex-basis
 - flex
 - align-self

#### order
定义项目的排列顺序。数值越小，排列越靠前，可以是负数，相同时依dom顺序。
```
order: <integer>; // 0 default
```
#### flex-grow
定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。负数无效，浏览器视作默认值0。
```
flex-grow: <number>; // 0 default
```
![](/images/2018-12-08-flex-summary/6.png)
注意放大比例是从剩余空间分配的，上图item最终实际宽度(px)：
图一：
剩余宽度restWidth = 300-3*50
红色宽度redWidth = 1/3*restWidth+50
黄色宽度yellowWidth = 2/3*restWidth+50
绿色宽度greenWidth = 50
图二依次类推
图三因为没有剩余宽度，发挥作用的是flex-shrink

#### flex-shrink
定义了项目的缩小比例，即如果空间不足，该项目将缩小，flex-shrink属性为0时项目不缩小，负数无效，浏览器视作默认值1。
```
flex-shrink: <number>; // 1 default
```
![](/images/2018-12-08-flex-summary/7.png)
注意当flex-shrink属性为0的项目总宽度大于等于容器宽度时，即没有剩余空间分配时，其余flex-shrink属性不为0的项目宽度会缩小成刚好能够容纳内容，padding,margin依然有效。上图item最终实际宽度(px)：
图一：
剩余宽度restWidth = 300-3*100 = 0
所以redWidth和yellowWidth变成了能够容纳内容的最小宽度
图二：
剩余宽度restWidth = 300-2*100 = 100
所以redWidth和yellowWidth按照某种比例分配了restWidth，分配策略还没弄清楚


#### flex-basis
flex-grow和flex-shrink都提到了剩余空间，其实就是根据这个属性计算的，它的默认值为auto，即项目的本来大小。bootstrap4的栅格系统就是用了这个属性替代了bootstrap3的float:left+width%组合。
```
flex-basis: <length> | auto; // auto default
```
#### flex
是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。bootstrap4的栅格系统用的是(0 0 %)
```
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
![](/images/2018-12-08-flex-summary/8.png)

#### align-self
允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
```
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```



  [1]: http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html