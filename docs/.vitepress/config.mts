import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notion助手",
  description: "自动化实现Notion all in one.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    logo: "logo.webp",
    sidebar: [
      {
        items: [
          { text: '关于', link: '/about' }
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
