---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Notion自动化"
  text: "自动化实现All-in-One."
  tagline: 让Notion使用更简单，自动化构建人生管理系统.
  actions:
    - theme: brand
      text: 下载插件
      link: /notionhub.zip
    - theme: brand # 或者其他主题，我们主要通过class覆盖
      text: Install on Chrome # 修改为你想要的文本
      link: /your-plugin-link # 指向你的插件链接
      image: custom-chrome-button # 添加自定义类名
  # image:
  #   src: /logo.webp
  #   alt: NotionHelper
features:
  - icon: 
      src: /chrome.png
    title: 在Chrome上安装
    link: https://malinkang.com/posts/weread2notion/
  - icon: 
      src: /chrome.png
    title: 在Edge上安装
    link: https://malinkang.com/posts/weread2notion/
  - icon: 
      src: /chrome.png
    title: 在Firefox上安装
    link: https://malinkang.com/posts/weread2notion/
  # - icon: 
  #     src: /weread.webp
  #   title: Weread2NotionPro
  #   details: Weread2Notion升级版，除了同步笔记，还可以同步书架中没读的书，同步每日阅读时长。
  #   link: https://malinkang.com/posts/weread2notion-pro/
  # - icon: 
  #     src: /douban.jpg
  #   title: Douban2Notion
  #   details: 将豆瓣电影和读书自动化同步到Notion
  # - title: Feature C
  #   details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---



<!-- <img src="/gzh.png" style="display: block; margin: 50px auto; width:800px;height:auto;" /> -->


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
/* .vitepress/theme/custom.css 或 .vitepress/style/custom.css */

/* 针对通过 frontmatter actions 配置的按钮 */
.VPButton.custom-chrome-button { /* 定位到我们自定义类的 VPButton */
  background-color: #ffffff; /* 白色背景 */
  color: #202124; /* 深灰色文字，类似 Google 的颜色 */
  border: 1px solid #dadce0; /* 浅灰色边框，类似 Google 的颜色 */
  border-radius: 8px; /* 圆角，根据图片调整 */
  padding: 10px 18px 10px 14px; /* 上 右 下 左 - 左边padding小一点给图标留空间 */
  font-weight: 500; /* 字体粗细 */
  font-size: 14px; /* 字体大小 */
  line-height: 20px; /* 行高 */
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15); /* 细微阴影 */
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: inline-flex; /* 使用flex布局来对齐图标和文字 */
  align-items: center; /* 垂直居中对齐 */
  text-decoration: none !important; /* 去除可能的下划线 */
}

/* 图标样式 */
.VPButton.custom-chrome-button::before {
  content: ''; /* 使用伪元素插入图标 */
  display: inline-block;
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
  margin-right: 10px; /* 图标和文字之间的间距 */
  background-image: url('/icons/chrome-icon.svg'); /* 引用public目录下的图标 */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle; /* 如果不用flex，这个可能有用 */
}

/* 悬停效果 */
.VPButton.custom-chrome-button:hover {
  background-color: #f8f9fa; /* 悬停时略微变灰的背景 */
  border-color: #c6c6c6; /* 悬停时边框颜色加深 */
  box-shadow: 0 1px 3px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15); /* 悬停时阴影加深 */
}

/* 点击效果 */
.VPButton.custom-chrome-button:active {
  background-color: #f1f3f4; /* 点击时背景 */
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15); /* 点击时阴影恢复 */
}

/* 确保 VitePress 默认主题的样式不会覆盖太多 */
.VPButton.custom-chrome-button.brand { /* 如果你用了 theme: brand */
    background-color: #ffffff; /* 覆盖默认主题的brand颜色 */
    /* 你可能需要添加 !important 或者更具体的选择器来覆盖默认主题的颜色 */
}

.VPButton.custom-chrome-button.brand:hover {
    background-color: #f8f9fa; /* 覆盖默认主题的brand hover颜色 */
}
</style>
