# **关于****Cursor**

## **Cursor****的简介**

*Cursor* *是基于VS Code 开发的一款编辑器*，它在保留VS Code 强大功能和熟悉操作体验的同时，专注于集成AI 技术，帮助用户更高效地编写代码。
![](0.png)

<br>

- 2022 早期发展：Cursor 由几位年轻的 MIT 学生创立
	
- 2023 功能创新：Cursor 推出了 Composer 功能，允许用户在对话模式中直接创建和修改多个文件的代码
	
- 2024年8月 爆红与应用：一位 8 岁小女孩使用 Cursor 在短时间内搭建聊天机器人，吸引了大量关注，导致 Cursor 在全球范围内火爆
	
- 持续发展与完善：Cursor继续推出新功能，并在提高开发效率和用户体验方面不断进步。
	

<br>

## **Cursor****的界面**

![](1.png)
<br>

## **Cursor****的****AI****亮点**

**Agent模式**

- 终端命令执行：直接在编辑器内运行命令行操作，简化开发流程
	
- 多工具协同：支持连续调用最多25个工具，实现自动化代码重构/错误修复/文件批量操作
	

<br>

**MCP****接入**

- 上下文共享：向AI模型提供文件内容/数据库记录等上下文信息
	
- 工具暴露：支持API调用/文件读写等扩展功能
	

<br>

**TAB预测**

- 智能预测：根据上下文预测用户接下来的输出的内容
	
- 光标预测：根据上下文与用户行为预测接下来的操作位置
	

<br>

***

<br>

# **实践项目**

1. ## 写个IOS去开屏广告的插件
	

这个插件的想法是纯粹想验证一下cursor的能力。看看cursor编写常规的东西外，能不能做其他的东西。
IOS很多应用都有开屏广告，有些甚至有奇怪的开屏摇一摇（这个灵敏到离谱）。

| 过程 | 体验点 |
| :-- | :-- |
| ### **1.创建项目文件夹，然后输入prompt，开启agent模式。**  | **降低门槛：环境依赖的自动安装** |\
|||\
| prompt：现在你是ios越狱插件开发专家，现在需要设计一个跳过开屏广告的插件。这个插件可以注入到任何app。你需要编写对应的plist。最后要编译成可以使用trollfools注入app的dylib格式文件。 | 当我的项目需要一些新的环境和依赖，因为我开了agent模式，在得到的我的确认后，cursor可以在终端运行命令行安装对应的Theos环境和依赖。这对不熟悉新类型项目的人来说太友好了。（整个安装过程会出现错误，但是agent都会自动帮你根据错误修复） |\
| ![](2.png) | ![](3.png) |\
||
| ### **2.等待agent回复、编写代码和写入文件。**  | **checkpoint：容错性增强** |\
|||\
| ![](4.png) | 每个关键节点都创建一个检查点，就像以前单机游戏一样存档大法。因为cursor agent模式一次命可以修改多个文件，如果是ctrlZ，或者是使用时间线还原单个文件，那也是比较麻烦。之前的常见做法是每一个重要的节点就手动git一个，现在相当于cursor帮你用另一种方式自动存档了，你可以回到任意一个存档点。 |\
|| ![](5.png) |\
|||\
|||\
|| **集中清晰展示修改的文件** |\
|||\
|| 之前是需要在聊天区滚动来查看本次指令改了哪些文件，现在是在输入框上集中展示本次改了哪些文件，改的进度怎么样了。 |\
|| ![](6.png) |
| ### **3.** **编译****插件** | **prompt让agent直接运行****编译****命令行** |\
|||\
| ![](7.png) | 在编写完代码文件后，可以直接自动运行编译工作。命令行会在聊天窗口展示，也可以在单独的终端面板展示 |\
|| ![](8.jpg) |
| **3.后续动作建议** | **指引用户：给出建议操作** |\
| ![](9.png) ||\
|| cursor会话后会在末尾做一个小总结，并给出建议的操作。在这边它会指引我去到手机里去使用trollfools去把插件进行注入。 |\
|||
| ### **4.插件最终效果** |  |\
||\
| 打开KEEP会有开屏广告，使用trollfools注入编译的插件后，开屏广告消失。推出插件后，广告重新出现。 |

<br>

<br>

2. ## 写个Framer去水印的Code Component
	

Framer是我平时用来无代码搭建网站的一个工具，因为它对设计师友好，与figma衔接的也ok。
Framer支持创建code component（自定义组件），在网站加载的时候会运行其中的代码来实现自定义组件功能。于是就有了想法，能不能在代码中插入删除元素的脚本从而实现去除水印。

| 过程 | 体验点 |
| :-- | :-- |
| ### **1.准备前置信息，然后输入prompt，并开启agent模式。**  | **多样的context输入** |\
|||\
| 使用开发者工具查看水印的相关信息，为cursor提供更加精准的信息更加容易实现功能。 | 通过@可以引入多样的内容作为context，辅助代码生成 |\
| ![](10.png) | ![](11.png) |\
| 查找framer 的code component的开发文档，作为context输入给到cursor。 | 对context也可以快速预览 |\
| prompt：我需要创建一个framer 的code component，它的功能是去除网页代码内 div id为\_\_framer-badge-container的水印元素 | ![](12.png) |\
||
| ### **2.等待agent回复、编写代码和写入文件。**  |  |\
||\
| ![](13.png) |
| ### **3.二次修改** | **详略得当：变更内容会有不同颗粒度的展示** |\
|||\
| 生成后，有不对的地方，和agent对话进行二次修改 | 在具体文件中，会以diff模式展示变更内容，底部有对当前文件的一次性接受变更。 |\
| ![](14.png) | ![](15.png) |
| ### **4.在Framer中应用** |  |\
||\
| 在Framer中创建一个code component，把在cursor生成的代码粘贴进去。再把组件拖拽到页面中。 |\
| ![](16.png) |\
| 后面利用类似的原理，让cursor加入去除spline的水印的功能。并在配置面板暴露属性。可以按需开关。 |\
| ![](17.png) |
| **5.最终效果验证** |  |\
| Framer 与 Spline的的水印都消失了 |\
| https://bisque-app-296964.framer.app/ |

<br>

<br>

3. ## 写个Figma 插件：comfigma
	

用cursor搞一个figma使用comfyui的插件。figma插件比之前做的ios去广告和framer去水印难度高一点，因为其实figma插件就相当一个完整的小产品，是有完整的功能闭环的。

| 过程 |
| :-- |
| ### **收集figma插件开发文档与comfyui后端API文档** |\
||\
| https://www.figma.com/plugin-docs/ |\
| https://comfy.icu/docs/api |\
| 准备一个标准的文生图工作流并导出为comfyui api |\
| ![](18.png) |\
| 暂时无法在飞书文档外展示此内容 |\
||
| ### **编写prompt并把上一部的资料作为context输入** |\
||\
| @https://comfy.icu/docs/api @https://www.figma.com/plugin-docs/ 我现在需要生成一个figma插件，在figma中调用comfyui工作流生成图片。这个插件有一个生成按钮，点击生成后，会以 @1.json 作为工作流发送给comfyui后端进行图片生成。生成后的图片需要返回给figma并粘贴到画布中。comfyui后端的地址为http://127.0.0.1:8188/ |\
| ![](19.png) |
| ### **调试功能** |\
||\
| 这一步是最花时间的 |\
| 遇到的主要问题为下面几个： |\
||\
| 1. figma插件连不上comfyui后端。好像是遇到了跨域问题，查找资料后，貌似要在启动器里增加相关启动参数，并让cursor修改相关代码才行。这个问题和它对话5，6次才能修复 |\
| 	 |\
||\
| ![](20.png) |\
| ![](21.png) |\
||\
| 2. 后端跑进度条有反应了，但是figma没反应。figma提供了开发者调试工具，我都是把里面抛的错误加上自然语言简单描述问题发给cursor让他不断改 |\
| 	 |\
||\
| ![](22.png) |\
| ![](23.png) |\
||\
| 3. 尝试增加后端地址配置，但是遇到了问题，使用了cursor的checkpoint功能restore了（灰常好用）。它同时会给出平替建议，让我使用端口转发的方式来实现。 |\
| 	 |\
||\
| ![](24.png) |\
| ![](25.png) |
| ### **完善界面** |\
||\
| 虽然第一步不做全部的功能，但是先让cursor帮我把界面搭建起来，然后在慢慢的去填充功能。 |\
| 我把在figma做的设计稿导出png发给cursor |\
| ![](26.png) |\
| ![](27.png) |
| ### 功能展示 |

<br>

<br>

<br>

<br>

***

<br>

# **产品设计探索**

1. ## 更好的与AI对话：Cursor 与 Mermaid
	

Mermaid 是一个基于 JavaScript 的图表绘制工具，它使用 Markdown 启发的文本定义和渲染器来创建和修改复杂的图表。
Mermaid可以辅助AI对需求的理解，所以想以此作为出发点，探索在cursor中使用mermaid的用法。

| ### 需求可视化扩写 |
| :-- |
| **1.简短描述需求要求使用mermaid格式写入。**  |\
| 第一个想到的是，在对一个全新的需求进行描述时，我们的输入往往比较简单。我们可以给cursor一个大致的需求描述，让它生成详细的mermaid文档。 |\
| ![](28.png) |\
| 以下是生成的mermaid格式的需求文档 |\
| 里面主要从核心功能模块、详细功能需求、系统角色及权限、技术架构等方面进行了需求说明。 |\
| [https://bytedance.larkoffice.com/sync/Bz4NdovgfslGF2b94e2cxlSDn4g](https://bytedance.larkoffice.com/sync/Bz4NdovgfslGF2b94e2cxlSDn4g) |\
||
| **2.修改mermaid并引用** |\
| 使用@的方式把mermaid文档作为context输入给cursor |\
| ![](29.png) |
| **3.产物验证** |\
| 下面图一到图四为生成的页面例子，整个网站架构和mermaid文档里描述的一致。 |\
| ![](30.png) |

[https://bytedance.larkoffice.com/sync/EDVwdqlPxs0BaTbRKI7cRS0unEe](https://bytedance.larkoffice.com/sync/EDVwdqlPxs0BaTbRKI7cRS0unEe)
<br>

<br>

<br>

2. ## 更优雅的设计对接：Figma Context MCP
	

一直探索怎么样能把Figma设计稿通过cursor能比较优雅的还原

1. 试过使用插件把画布转为json作为context输入给cursor：[Figma to Cursor | Figma](https://www.figma.com/community/plugin/1434599500152464568) 但是画布内容稍微复杂，就是超token
	
2. 试过使用类似lovable，先用figma插件通过D2C的形式转为代码，用cursor导入后再加工。 [Figma to Code (HTML, Tailwind, Flutter, SwiftUI) | Figma](https://www.figma.com/community/plugin/842128343887142055)
	

**🌟最近发现一种能把Figma文件作为MCP服务提供给cursor，于是做一下与纯图片生成方式的效果对比**
[GitHub - GLips/Figma-Context-MCP: MCP server to provide Figma layout information to AI coding agents](https://github.com/GLips/Figma-Context-MCP?tab=readme-ov-file)
<br>

| 设计图 | Figma Context MCP | **纯图片** |
| :-- | :-- | :-- |
| ![](31.png) | ### 最终效果： | ### 最终效果： |\
||||\
|| ![](32.png) | ![](37.png) |\
|| https://ifimcyx.github.io/m0/ | https://ifimcyx.github.io/m0\_img/ |\
||||\
||||\
|| ### 过程 | ### 过程 |\
||||\
|| ![](33.png) | ![](38.png) |\
||| **Prompt：**  |\
|| 1. **Prompt：**  | @index.html 根据设计图 @主页面jpg 设计页面 |\
|| 	 | 注意： |\
||| 像素级还原布局结构 |\
|| @index.html 根据figma设计稿设计网页https://www.figma.com/design/IjLOXZQFkEoFXNAvqKkSre/Untitled?node-id=0-1352&t=y5CXumoK2jBcwx1j-4 | 精确匹配色值、字体样式与字号 |\
|| 注意： | 保持元素间距 |\
|| 像素级还原布局结构 | 完整复现交互状态(hover/active等) |\
|| 精确匹配色值、字体样式与字号 | 保留图层命名与组件层级关系 |\
|| 保持元素间距 | 发现设计规范冲突时优先遵循源文件 |\
|| 完整复现交互状态（hover/active等） | 使用语义化classt命名规范 |\
|| 保留图层命名与组件层级关系 | 输出响应式代码时需保持原始比例 |\
|| 发现设计规范冲突时优先遵循源文件 | @主页面.jpg @index.html |\
|| 使用语义化class命名规范 |\
|| 输出响应式代码时需保持原始比例 |\
|||\
|||\
|| 2. **MCP** |\
|| 	 |\
|||\
|| 可以看到figma MCP除了返回json内容，还返回了各种切图资源 |\
|| ![](34.png) |\
|| ![](35.png) |\
|| ![](36.png) |
| ![](39.png) | ### 最终效果： | ### 最终效果： |\
||||\
|| ![](40.png) | ![](41.png) |\
|| https://ifimcyx.github.io/kfpt/ ||\
|| 还是有些布局崩了，但是通过多轮对话应该能抢救一下 |
| ![](42.png) | ### 最终效果： | ### 最终效果： |\
||||\
|| ![](43.png) | ![](44.png) |\
|| https://ifimcyx.github.io/KFPThome/ ||

<br>

<br>

***

<br>

# Cursor × 设计

Cursor作为AI驱动的代码编辑器，正在重新定义产品设计师的工作模式，通过降低编码门槛、增强设计实现效率、促进跨职能协作等方式，为设计师带来多维度的能力升级。以下是其核心赋能场景：
<br>

**1\. 全链路设计能力**
自然语言驱动的原型开发：设计师可直接用日常语言描述需求，Cursor会生成对应代码，快速构建可交互的原型。
动效验证依赖开发介入：实时生成微交互代码（如悬停状态、转场动画）
<br>

**2\. 跨职能协作范式升级**
当设计师通过Cursor直接参与代码构建时，团队协作模式从"设计交付-开发实现"转变为"共同创作"。这种改变带来：
需求沟通减少语义歧义（通过代码作为唯一真实来源）
开发资源释放（设计师可自主完成60%以上的前端样式调整）
<br>

**3\. 个性化定制**
设计师可根据团队的设计风格和用户需求，定制工具的功能和界，打造独一无二的设计辅助工具，提升设计效率和作品质量。
<br>

<br>

<br>

***

分享者
@陈阳兴
分享者
原文档
[设计师用Cursor做“奇怪的东西”](https://bytedance.larkoffice.com/docx/O1BGd6OgDoroK6xLJuUcCeoXnfc)

<br>