# Cursor AI 编辑器网站

这是一个使用Next.js构建的Cursor AI编辑器展示网站，展示了Cursor的功能和使用案例。

## 特点

- 响应式设计，适配各种设备屏幕
- 动画效果和交互元素，提升用户体验
- 实践项目和产品设计探索展示
- 详细的时间线和步骤说明

## 开发技术

- Next.js 15.2.3
- React
- Tailwind CSS
- Framer Motion

## 本地开发

1. 克隆仓库

```bash
git clone https://github.com/your-username/cursor-site.git
cd cursor-site
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 部署到GitHub Pages

此项目配置为通过GitHub Actions自动部署到GitHub Pages：

1. 将代码推送到GitHub仓库的main分支
2. GitHub Actions将自动构建并部署网站
3. 部署完成后，可以通过 `https://your-username.github.io/cursor-site/` 访问

要手动构建生产版本：

```bash
npm run build
```

生成的静态文件将位于 `out` 目录中。

## 许可证

MIT
