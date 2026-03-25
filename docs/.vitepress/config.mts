import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notionhub",
  description: "自动同步微信读书、豆瓣、小宇宙、Flomo等数据到Notion",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/install' },
      { text: '常见问题', link: '/docs/faq' },
    ],
    logo: "logo.png",
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '安装插件', link: '/docs/install' },
          { text: '获取激活码', link: '/docs/get-activation-code' },
        ]
      },
      {
        text: '使用指南',
        items: [
          { text: '微信读书', link: '/docs/weread' },
          { text: '豆瓣', link: '/docs/douban' },
          { text: '小宇宙播客', link: '/docs/podcast' },
          { text: 'Flomo', link: '/docs/flomo' },
        ]
      },
      {
        text: '帮助',
        items: [
          { text: '常见问题', link: '/docs/faq' },
          { text: '修复 404 问题', link: '/docs/fix-404' },
          { text: '技术支持', link: '/docs/support' },
        ]
      }
    ],
    footer: {
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 马林康`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/malinkang/notion' }
    ]
  }
})
