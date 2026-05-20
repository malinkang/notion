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
          { text: 'WeRead2Notion开源版', link: '/docs/weread2notion-open-source' },
          { text: '豆瓣', link: '/docs/douban' },
          { text: '小宇宙播客', link: '/docs/podcast' },
          { text: 'Flomo', link: '/docs/flomo' },
          { text: 'Keep', link: '/docs/keep' },
          { text: '网易云音乐', link: '/docs/neteasemusic' },
        ]
      },
      {
        text: '触发同步',
        items: [
          { text: 'iOS 快捷指令', link: '/docs/ios-shortcuts' },
          { text: 'Android HTTP Shortcuts', link: '/docs/http-shortcuts' },
        ]
      },
      {
        text: '通知配置',
        items: [
          { text: 'Telegram', link: '/docs/notifications/telegram' },
          { text: '飞书', link: '/docs/notifications/feishu' },
          { text: '钉钉', link: '/docs/notifications/dingtalk' },
          { text: '企业微信', link: '/docs/notifications/wecom' },
        ]
      },
      {
        text: '帮助',
        items: [
          { text: '常见问题', link: '/docs/faq' },
          { text: '修复 404 问题', link: '/docs/fix-404' },
          { text: '模板页面不存在或无访问权限', link: '/docs/template-page-no-access' },
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
