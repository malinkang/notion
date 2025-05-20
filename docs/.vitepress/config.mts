import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notionhub",
  description: "自动化实现Notion all in one.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/docs/install' }
    ],
    logo: "logo.png",
    sidebar: [
      {
        items: [
          { text: '安装', link: '/docs/install' },
          { text: '获得激活码', link: '/docs/get-activation-code' }
        ]
      }
    ],
    footer: {
      copyright: `版权所有 © 2023-${new Date().getFullYear()} 马林康`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
