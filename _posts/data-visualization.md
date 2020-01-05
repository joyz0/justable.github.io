## 名词介绍

- 渲染：主要分三个步骤
- GPU 渲染管线：固定管线（淘汰），可编程渲染管线
- OpenGL(Open Graphics Library)：用于渲染 2D、3D 矢量图形的跨语言、跨平台的应用程序编程接口，在着色时会用到 GLSL
- OpenGL ES2：OpenGL 是一个非常大的 API 集合，既有老的特性，也有厂商特定的 API，也有新的 API，OpenGL ES 把 GL 那些边边角角的 API 统统都干掉，只保留最常用、最必要的那些 API，同时也是为了匹配移动芯片的特性
- GLSL(OpenGL Shading Language)：OpenGL 着色语言，在 GPU 上执行，代替了固定的渲染管线的一部分，使渲染管线中不同层次具有可编程性。包含 Vertex Shader（顶点着色器）和 Fragment（片元着色器），有时还会有 Geometry Shader（几何着色器）
- WebGL：使用 JS 对 OpenGL ES2 调用的封装，是一套用于渲染 2D 和 3D 图形的标准图形库，可以为 HTML5 Canvas 提供硬件 3D 加速渲染
- ThreeJS：是以 WebGL 为基础的库
- D3：是以 SVG 为基础的可视化库
- Canvas：

## 绘图上下文

> 绘图上下文是个抽象层，因为需要支持不同移植，所以只提供接口，所有绘图操作都在绘图上下文中进行。对于 2D 绘图上下文来说，其平台相关的实现既可以使用 CPU 来完成 2D 相关的操作，也可以使用 3D 图形接口（如 OpenGL）来完成 2D 的操作。而对于 3D 绘图上下文来说，因为性能问题，WebKit 的移植通常都是使用 3D 图形接口（如 OpenGL 或者 Direct3D 等技术）来实现详细参考[这篇文章](https://www.jianshu.com/p/60174ad4a8c6)。

1. 2D 图形上下文（GraphicsContext）：用来绘制 2D 图形。提供基本绘图单元的绘制接口以及设置绘图的样式。绘图接口包括画点，画线、画图片、画多边形、画文字等，绘图样式包括颜色、线宽、字号大小、渐变等。LayoutObject 对象调用绘图上下文的这些基本操作就是绘制实际的显示结果。
   ![](/images/data-visualization/1.png)
2. 3D 绘图上下文：用来绘制 3D 图形，如 OpenGL 或者 Direct3D 等。

## 渲染方式

1. 软件渲染机制：由 CPU 负责绘制每层的内容，然后按顺序把每层‘印’在最终生成的那张大位图的不同位置，因此无需合成阶段。
2. 硬件加速渲染：由 GPU 负责绘制每层的内容，GPU 负责合成
3. 混合模式：由 CPU 负责绘制每层的内容，GPU 负责合成，或者是由 CPU 绘制部分层的内容，CPU 绘制另一部分层的内容，GPU 负责合成。CPU 绘制完的内容都需要传输到 GPU，为了之后的合成

使用了合成技术的渲染称之为合成化渲染，如上述 2，3；硬件加速渲染方式，如上述 2，3。

对于常见的 2D 绘图操作，使用 GPU 来绘图不一定比使用 CPU 绘图在性能上有优势，例如绘制文字、点、线等，原因是 CPU 的使用缓存机制有效减少了重复绘制的开销而且不需要 GPU 并行性。其次，GPU 的内存资源相对 CPU 的内存资源来说比较紧张，而且网页的分层使得 GPU 的内存使用相对较多。使用 CPU 渲染还有个好处，除了第一次渲染网页绘制整个可视区域外，之后的更新都会先计算需要更新的区域，然后绘制同这些区域有交集的 LayoutObject 节点，如果更新区域跟某个 PaintLayer 有交集，还会继续查找 PaintLayer 树中包含的 LayoutObject 树中的特定一个或一些节点，而 GPU 受限于可用资源紧张，不会花时间去计算需要更新的区域，所以通常只有提升为 GraphicsLayer 时再交给 GPU 渲染比较好，不然没分合成层的化，会重绘整张位图。

GraphicsLayer 可以是可以在 CPU 绘制，也可以在 GPU 绘制，GPU 的作用主要是用来绘制 3D 图形并且性能特别好。

## 书籍

《计算机图形学》《OpenGL 编程指南（第八版）》《OpenGL 超级宝典》《WebKit 技术内幕》
《OpenGL Programming Guide》《OpenGL Bible》《OpenGL Insights》
http://www.khronos.org/opengles/sdk/docs/reference_cards/OpenGL-ES-2_0-Reference-card.pdf
