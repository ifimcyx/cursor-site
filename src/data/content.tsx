import React from "react";
import { CardItem } from "@/components/ui/expandable-card";

// 实践项目数据
export const practiceProjects: CardItem[] = [
  {
    title: "写个IOS去开屏广告的插件",
    description: "使用Cursor编写iOS越狱插件，跳过应用开屏广告",
    imageSrc: "/images/2.png",
    content: (
      <div>
        <p className="mb-4">
          这个插件的想法是纯粹想验证一下cursor的能力。看看cursor编写常规的东西外，能不能做其他的东西。
          IOS很多应用都有开屏广告，有些甚至有奇怪的开屏摇一摇（这个灵敏到离谱）。
        </p>
      </div>
    ),
    steps: [
      {
        title: "创建项目文件夹，开启agent模式",
        content: (
          <p>
            通过prompt让Cursor作为iOS越狱插件开发专家，设计一个跳过开屏广告的插件。
            <br/><br/>
            <strong>体验点：降低门槛：环境依赖的自动安装</strong>
            <br/>
            当项目需要新的环境和依赖，因为开启了agent模式，在得到确认后，cursor可以在终端运行命令行安装对应的Theos环境和依赖。这对不熟悉新类型项目的人来说非常友好。整个安装过程可能会出现错误，但agent会自动帮助根据错误修复。
          </p>
        ),
        image: "/images/3.png"
      },
      {
        title: "等待agent回复、编写代码和写入文件",
        content: (
          <p>
            <strong>体验点：checkpoint：容错性增强</strong>
            <br/>
            每个关键节点都创建一个检查点，就像以前单机游戏一样存档大法。因为cursor agent模式一次命令可以修改多个文件，如果使用ctrlZ，或者是使用时间线还原单个文件，操作比较麻烦。之前的做法是每一个重要的节点就手动git一个，现在相当于cursor帮你用另一种方式自动存档了，你可以回到任意一个存档点。
            <br/><br/>
            <strong>集中清晰展示修改的文件</strong>
            <br/>
            之前需要在聊天区滚动来查看本次指令改了哪些文件，现在是在输入框上集中展示本次改了哪些文件，改的进度怎么样了。
          </p>
        ),
        image: "/images/5.png"
      },
      {
        title: "编译插件",
        content: (
          <p>
            <strong>prompt让agent直接运行编译命令行</strong>
            <br/>
            在编写完代码文件后，可以直接自动运行编译工作。命令行会在聊天窗口展示，也可以在单独的终端面板展示。
          </p>
        ),
        image: "/images/8.jpg"
      },
      {
        title: "后续动作建议",
        content: (
          <p>
            <strong>指引用户：给出建议操作</strong>
            <br/>
            cursor会话后会在末尾做一个小总结，并给出建议的操作。在这边它会指引用户去到手机里去使用trollfools去把插件进行注入。
          </p>
        ),
        image: "/images/9.png"
      },
      {
        title: "插件最终效果",
        content: (
          <p>
            打开KEEP会有开屏广告，使用trollfools注入编译的插件后，开屏广告消失。退出插件后，广告重新出现。
          </p>
        ),
        image: "/images/7.png"
      }
    ]
  },
  {
    title: "写个Framer去水印的Code Component",
    description: "使用Cursor创建Framer自定义组件，去除网站水印",
    imageSrc: "/images/10.png",
    content: (
      <div>
        <p className="mb-4">
          Framer是平时用来无代码搭建网站的工具，它对设计师友好，与figma衔接的也ok。
          Framer支持创建code component（自定义组件），在网站加载的时候会运行其中的代码来实现自定义组件功能。
          于是就有了想法，能不能在代码中插入删除元素的脚本从而实现去除水印。
        </p>
      </div>
    ),
    steps: [
      {
        title: "准备前置信息，输入prompt开启agent模式",
        content: (
          <p>
            使用开发者工具查看水印的相关信息，为cursor提供更加精准的信息更加容易实现功能。
            <br/><br/>
            <strong>体验点：多样的context输入</strong>
            <br/>
            通过@可以引入多样的内容作为context，辅助代码生成。对context也可以快速预览。
          </p>
        ),
        image: "/images/11.png"
      },
      {
        title: "等待agent回复、编写代码和写入文件",
        content: (
          <p>
            Cursor根据提供的上下文信息，生成去除水印的代码组件。
          </p>
        ),
        image: "/images/13.png"
      },
      {
        title: "二次修改",
        content: (
          <p>
            生成后有不对的地方，和agent对话进行二次修改。
            <br/><br/>
            <strong>体验点：详略得当：变更内容会有不同颗粒度的展示</strong>
            <br/>
            在具体文件中，会以diff模式展示变更内容，底部有对当前文件的一次性接受变更。
          </p>
        ),
        image: "/images/15.png"
      },
      {
        title: "在Framer中应用",
        content: (
          <p>
            在Framer中创建一个code component，把在cursor生成的代码粘贴进去，再把组件拖拽到页面中。
            后面利用类似的原理，加入去除spline的水印的功能，并在配置面板暴露属性，可以按需开关。
          </p>
        ),
        image: "/images/17.png"
      },
      {
        title: "最终效果验证",
        content: (
          <p>
            Framer与Spline的水印都消失了。
            <br/>
            https://bisque-app-296964.framer.app/
          </p>
        ),
        image: "/images/16.png"
      }
    ]
  },
  {
    title: "写个Figma插件：comfigma",
    description: "使用Cursor开发Figma插件，集成ComfyUI图像生成功能",
    imageSrc: "/images/18.png",
    content: (
      <div>
        <p className="mb-4">
          用cursor搞一个figma使用comfyui的插件。figma插件比之前做的ios去广告和framer去水印难度高一点，
          因为其实figma插件就相当一个完整的小产品，是有完整的功能闭环的。
        </p>
      </div>
    ),
    steps: [
      {
        title: "收集figma插件开发文档与comfyui后端API文档",
        content: (
          <p>
            https://www.figma.com/plugin-docs/
            <br/>
            https://comfy.icu/docs/api
            <br/><br/>
            准备一个标准的文生图工作流并导出为comfyui api。
          </p>
        ),
        image: "/images/18.png"
      },
      {
        title: "编写prompt并把上一部的资料作为context输入",
        content: (
          <p>
            将Figma插件文档与ComfyUI API文档作为上下文提供给Cursor，描述需要一个在Figma中调用ComfyUI工作流生成图片的插件。
          </p>
        ),
        image: "/images/19.png"
      },
      {
        title: "调试功能",
        content: (
          <p>
            这一步是最花时间的。主要遇到的问题为下面几个：
            <br/><br/>
            1. figma插件连不上comfyui后端。好像是遇到了跨域问题，查找资料后，貌似要在启动器里增加相关启动参数，并让cursor修改相关代码才行。这个问题和它对话5，6次才能修复。
            <br/><br/>
            2. 后端跑进度条有反应了，但是figma没反应。figma提供了开发者调试工具，把里面抛的错误加上自然语言简单描述问题发给cursor让他不断改。
            <br/><br/>
            3. 尝试增加后端地址配置，但是遇到了问题，使用了cursor的checkpoint功能restore了（非常好用）。它同时会给出平替建议，让我使用端口转发的方式来实现。
          </p>
        ),
        image: "/images/23.png"
      },
      {
        title: "完善界面",
        content: (
          <p>
            虽然第一步不做全部的功能，但是先让cursor帮我把界面搭建起来，然后在慢慢的去填充功能。
            我把在figma做的设计稿导出png发给cursor。
          </p>
        ),
        image: "/images/27.png"
      }
    ]
  },
];

// 产品设计探索数据
export const designExplorations: CardItem[] = [
  {
    title: "更好的与AI对话：Cursor与Mermaid",
    description: "使用Mermaid可视化辅助AI理解需求",
    imageSrc: "/images/28.png",
    content: (
      <div>
        <p className="mb-4">
          Mermaid是一个基于JavaScript的图表绘制工具，它使用Markdown启发的文本定义和渲染器来创建和修改复杂的图表。
          Mermaid可以辅助AI对需求的理解，以此作为出发点，探索在cursor中使用mermaid的用法。
        </p>
      </div>
    ),
    steps: [
      {
        title: "需求可视化扩写",
        content: (
          <p>
            第一个想到的是，在对一个全新的需求进行描述时，我们的输入往往比较简单。我们可以给cursor一个大致的需求描述，让它生成详细的mermaid文档。
            <br/><br/>
            以下是生成的mermaid格式的需求文档，里面主要从核心功能模块、详细功能需求、系统角色及权限、技术架构等方面进行了需求说明。
          </p>
        ),
        image: "/images/28.png"
      },
      {
        title: "修改mermaid并引用",
        content: (
          <p>
            使用@的方式把mermaid文档作为context输入给cursor，让其理解并基于可视化需求生成代码。
          </p>
        ),
        image: "/images/29.png"
      },
      {
        title: "产物验证",
        content: (
          <p>
            下面图一到图四为生成的页面例子，整个网站架构和mermaid文档里描述的一致，证明了这种需求表达方式的有效性。
          </p>
        ),
        image: "/images/30.png"
      }
    ]
  },
  {
    title: "更优雅的设计对接：Figma Context MCP",
    description: "探索Figma设计稿与Cursor的优雅对接方式",
    imageSrc: "/images/31.png",
    content: (
      <div>
        <p className="mb-4">
          一直探索如何能把Figma设计稿通过cursor比较优雅地还原。
          尝试过多种方式，最近发现一种能把Figma文件作为MCP服务提供给cursor的方法。
        </p>
      </div>
    ),
    steps: [
      {
        title: "之前的尝试",
        content: (
          <p>
            1. 试过使用插件把画布转为json作为context输入给cursor：<a href="https://www.figma.com/community/plugin/1434599500152464568" target="_blank">Figma to Cursor | Figma</a> 但是画布内容稍微复杂，就是超token
            <br/><br/>
            2. 试过使用类似lovable，先用figma插件通过D2C的形式转为代码，用cursor导入后再加工。 <a href="https://www.figma.com/community/plugin/842128343887142055" target="_blank">Figma to Code (HTML, Tailwind, Flutter, SwiftUI) | Figma</a>
          </p>
        ),
        image: "/images/33.png"
      },
      {
        title: "Figma Context MCP对比纯图片的效果",
        content: (
          <p>
            最近发现一种能把Figma文件作为MCP服务提供给cursor，进行了与纯图片生成方式的效果对比。
            <br/><br/>
            <a href="https://github.com/GLips/Figma-Context-MCP">GitHub - GLips/Figma-Context-MCP: MCP server to provide Figma layout information to AI coding agents</a>
          </p>
        ),
        image: "/images/34.png"
      },
      {
        title: "效果展示",
        content: (
          <p>
            <strong>Figma Context MCP:</strong>
            <br/>
            https://ifimcyx.github.io/m0/
            <br/><br/>
            <strong>纯图片:</strong>
            <br/>
            https://ifimcyx.github.io/m0_img/
            <br/><br/>
            可以看到figma MCP除了返回json内容，还返回了各种切图资源。对比效果表明，MCP方式可以提供更精确的布局信息。
          </p>
        ),
        image: "/images/32.png"
      }
    ]
  },
];

// Cursor简介和亮点数据
export const cursorIntroduction = {
  title: "关于Cursor",
  description: "Cursor是基于VS Code开发的编辑器，在保留VS Code强大功能和熟悉操作体验的同时，专注于集成AI技术，帮助用户更高效地编写代码。",
  history: [
    "2022年早期发展：Cursor由几位年轻的MIT学生创立",
    "2023年功能创新：Cursor推出了Composer功能，允许用户在对话模式中直接创建和修改多个文件的代码",
    "2024年8月爆红与应用：一位8岁小女孩使用Cursor在短时间内搭建聊天机器人，吸引了大量关注",
    "持续发展与完善：Cursor继续推出新功能，并在提高开发效率和用户体验方面不断进步"
  ],
  aiFeatures: [
    {
      title: "Agent模式",
      items: [
        "终端命令执行：直接在编辑器内运行命令行操作，简化开发流程",
        "多工具协同：支持连续调用最多25个工具，实现自动化代码重构/错误修复/文件批量操作"
      ]
    },
    {
      title: "MCP接入",
      items: [
        "上下文共享：向AI模型提供文件内容/数据库记录等上下文信息",
        "工具暴露：支持API调用/文件读写等扩展功能"
      ]
    },
    {
      title: "TAB预测",
      items: [
        "智能预测：根据上下文预测用户接下来的输出的内容",
        "光标预测：根据上下文与用户行为预测接下来的操作位置"
      ]
    }
  ]
};

// Cursor与设计的关系
export const cursorDesign = {
  title: "Cursor × 设计",
  description: "Cursor作为AI驱动的代码编辑器，正在重新定义产品设计师的工作模式，通过降低编码门槛、增强设计实现效率、促进跨职能协作等方式，为设计师带来多维度的能力升级。",
  features: [
    {
      title: "全链路设计能力",
      description: "自然语言驱动的原型开发：设计师可直接用日常语言描述需求，Cursor会生成对应代码，快速构建可交互的原型。动效验证依赖开发介入：实时生成微交互代码（如悬停状态、转场动画）"
    },
    {
      title: "跨职能协作范式升级",
      description: "当设计师通过Cursor直接参与代码构建时，团队协作模式从'设计交付-开发实现'转变为'共同创作'。这种改变带来：需求沟通减少语义歧义（通过代码作为唯一真实来源），开发资源释放（设计师可自主完成60%以上的前端样式调整）"
    },
    {
      title: "个性化定制",
      description: "设计师可根据团队的设计风格和用户需求，定制工具的功能和界，打造独一无二的设计辅助工具，提升设计效率和作品质量。"
    }
  ]
}; 