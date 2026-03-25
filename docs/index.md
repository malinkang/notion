---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Notionhub"
  tagline: 自动同步微信读书、豆瓣、小宇宙、Flomo等数据到Notion
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/install
    - theme: alt
      text: 获取激活码
      link: /docs/get-activation-code
features:
  - icon: 📚
    title: 微信读书
    details: 同步书架、笔记划线、阅读时长到Notion
    link: /docs/weread
  - icon: 🎬
    title: 豆瓣
    details: 同步电影、图书标记和评分到Notion
    link: /docs/douban
  - icon: 🎙️
    title: 小宇宙播客
    details: 同步播客订阅、收听记录，支持AI转写和总结
    link: /docs/podcast
  - icon: 📝
    title: Flomo
    details: 同步笔记、标签、热力图到Notion，保留原始排版
    link: /docs/flomo
  - icon: 🌐
    title: 多浏览器支持
    details: 支持 Chrome、Edge、Firefox，也可手动安装
    link: /docs/install
  - icon: 🔒
    title: 安全可靠
    details: 数据加密传输，服务端AES-256加密存储
    link: /privacy
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
