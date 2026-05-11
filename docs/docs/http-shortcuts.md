---
outline: deep
---

# 使用 HTTP Shortcuts 在 Android 上触发微信读书、flomo、Keep、滴答清单、豆瓣等服务同步到 Notion

![HTTP Shortcuts 触发 NotionHub 同步](https://cdn.notionhub.app/notionhub/http-shortcuts/cover.png)

NotionHub 即将取消服务端统一自动同步，推荐改用手机端工具按需触发同步。

取消服务端自动同步主要有三个原因：

- 同一时间大量服务一起同步，会给服务器带来较大压力。
- 每天固定时间访问微信读书等第三方服务，可能被识别为异常自动化访问，存在账号风控风险。
- 定时同步不够及时，数据可能要等到下一次任务执行才会更新。

如果你使用 Android，可以通过 [HTTP Shortcuts](https://http-shortcuts.rmy.ch/) 保存 NotionHub 触发请求。之后可以手动点击同步，也可以添加到桌面小组件一键触发同步。

## 什么是 HTTP Shortcuts

HTTP Shortcuts 是一个开源、免费、无广告的 Android 自动化请求工具。你可以把一个 HTTP 请求保存成手机上的 Shortcut，然后像点击按钮一样发起请求。

在 NotionHub 里，它的作用类似 iPhone 的快捷指令：

- 保存同步请求，不用每次手动填写网址和参数。
- 支持 `POST`、表单参数、请求头等常见 HTTP 配置。
- 支持变量，适合把 NotionHub 的 `userId` 保存后重复使用。
- 支持桌面小组件，方便一键手动同步。

官方下载地址：

- Google Play：https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts
- F-Droid：https://f-droid.org/en/packages/ch.rmy.android.http_shortcuts/
- GitHub Releases：https://github.com/Waboodoo/HTTP-Shortcuts/releases

如果你的手机无法访问 Google Play，可以优先尝试 F-Droid 或 GitHub Releases。

## 第一步：安装 HTTP Shortcuts

先通过上面的官方下载地址安装 HTTP Shortcuts。

## 第二步：导入 NotionHub 同步请求

安装完成后，复制下面的 zip 链接，在 HTTP Shortcuts App 中点击右上角三个点，然后选择导入->从 URL 导入，粘贴链接到输入框，最后点击确定导入。

| 导入内容 | 导入链接 |
| --- | --- |
| 微信读书 | https://cdn.notionhub.app/notionhub/http-shortcuts/weread.zip |
| 小宇宙 | https://cdn.notionhub.app/notionhub/http-shortcuts/xyz.zip |
| 滴答清单 | https://cdn.notionhub.app/notionhub/http-shortcuts/ticktick.zip |
| flomo | https://cdn.notionhub.app/notionhub/http-shortcuts/flomo.zip |
| 豆瓣 | https://cdn.notionhub.app/notionhub/http-shortcuts/douban.zip |
| Keep | https://cdn.notionhub.app/notionhub/http-shortcuts/keep.zip |

![](https://cdn.notionhub.app/CleanShot%202026-05-11%20at%2010.54.34%402x.png)

![](https://cdn.notionhub.app/CleanShot%202026-05-11%20at%2010.56.02%402x.png)



导入后，回到主界面，点击右上角三个点，然后点变量。

![](https://cdn.notionhub.app/aab70423-8f1c-4ac2-a678-6662f29e40e7.png)

会看到一个 userId 的变量，点击，然后点编辑。

![](https://cdn.notionhub.app/dce6f1a4-5f56-4496-893c-d56a4031a3f3.png)

![](https://cdn.notionhub.app/c55559b5-96f3-4938-afe8-e356d9048957.png)

把 `YOUR_NOTION_USER_ID` 替换成你自己的 Notion 用户 ID，然后点击右上角保存。不知道如何获取 Notion 用户 ID 的用户，可以参考下面的视频获取。

![](https://cdn.notionhub.app/660f6fbc-a8d5-4b2f-8a18-93d0a381ff51.png)

<video src="https://cdn.notionhub.app/notionhub/ios-shortcuts/get-notion-user-id.mp4" controls playsinline style="width: 100%; border-radius: 8px;"></video>

## 第三步：手动触发同步

配置完成后，回到首页，点击对应的快捷方式就可以触发同步。

![](https://cdn.notionhub.app/b619752a3cf820ee58f724b948e4740e.png)


## 第四步：添加到桌面小组件

如果你希望更方便地触发同步，可以把 HTTP Shortcuts 添加到 Android 桌面小组件。长按快捷方式，点击放在主屏幕上即可。

![](https://cdn.notionhub.app/69e0d701008326a3bebb1766f1bc5517.png)

![](https://cdn.notionhub.app/CleanShot%202026-05-11%20at%2011.23.09%402x.png)

## 注意事项

- 每个服务每天有触发次数限制，避免误触发导致频繁同步。
- HTTP Shortcuts 只负责触发同步，真正的同步仍在 NotionHub 云端执行。
- 如果返回同步已开始，但 Notion 中没有变化，可能是当前服务没有新数据，或同步任务仍在执行中。
