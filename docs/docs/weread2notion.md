---
title: 研究了微信读书 Skills，我把 WeRead2Notion 复活了
outline: deep
---

# 研究了微信读书 Skills，我把 WeRead2Notion 复活了

![研究了微信读书 Skills，我把 WeRead2Notion 复活了](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-skills-cover.png)

前段时间研究了一下微信读书新开放的 Skills。本来只是想看看它能做什么，结果把 Skills 包解压之后，发现里面放的其实是一组微信读书 API 文档，包括书籍、书架、笔记、搜索、阅读数据等接口说明。

![微信读书 Skills 解压后的 API 文档](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread-skills-api-docs.webp)

我之前做过一个开源项目 WeRead2Notion，用来把微信读书的划线和笔记同步到 Notion。后来因为接口不稳定、维护成本高，这个项目一度停更。这次看到这些文档后，我就参考里面的 API 重新梳理了一遍项目：去掉 Cookie，改成 API Key；把 Notion 接口升级到新版 data source API；顺手把 GitHub Action 也封装了一下。

所以，这篇文章就记录一下新版 WeRead2Notion 怎么用。

WeRead2Notion 用于将微信读书的划线、想法和书籍信息自动同步到 Notion。新版已经改为 GitHub Action + 微信读书 API Key 的方式运行，不再需要复制微信读书 Cookie，也不需要 fork 后手动同步源码。

::: danger 重要提醒
WeRead2Notion 会在检测到书籍笔记更新时删除原来的同步页面，然后重新写入微信读书数据。请不要在同步生成的书籍页面里添加自己的笔记、批注或其他重要内容，否则下次同步时可能会被删除且无法恢复。
:::

::: warning 模板限制
开源版 WeRead2Notion 只能使用开发者提供的 Notion 模板。不要直接换成自己的数据库或其他模板，否则可能因为属性不一致导致同步失败。

如果你想同步到自己的 Notion 模板，或需要调整字段、页面结构、展示样式，可以联系开发者定制。
:::

预览效果：[https://malinkang.notion.site/weread2notion?](https://malinkang.notion.site/weread2notion?)

![WeRead2Notion 预览效果](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-preview.webp)

## 准备工作

开始之前需要准备 3 个值：

| 名称 | 用途 | 是否必填 |
| --- | --- | --- |
| `WEREAD_API_KEY` | 微信读书 Gateway API Key，用于读取微信读书数据 | 必填 |
| `NOTION_TOKEN` | Notion Integration Token，用于写入 Notion | 必填 |
| `NOTION_PAGE` | Notion 模板页面链接，用于确定同步到哪个模板 | 必填 |

::: tip
如果你从网页复制这些值时多复制了空格或换行，新版脚本会自动清理。格式明显不对时，GitHub Actions 会直接显示红色错误日志，方便排查。
:::

## 1. 复制 Notion 模板并获取授权信息

第一步先把开发者提供的 WeRead2Notion 模板复制到你的 Notion，并拿到后面要用的 `NOTION_TOKEN` 和 `NOTION_PAGE`。

1. 打开授权链接：

   https://api.notion.com/v1/oauth/authorize?client_id=801fd03a-a44f-41af-9a17-feb048b4bbdd&response_type=code&owner=user&redirect_uri=https%3A%2F%2Fnotion-auth.malinkang.com%2Fweread2notion-oauth-callback

2. 点击 `Next`，选择开发者提供的 WeRead2Notion 模板进行授权。

   ![](https://images.malinkang.com/2024/03/6e8adeccaf9fddef746300c3458b1967.png)

3. 点击 `Allow access`。

   ![](https://images.malinkang.com/2024/03/9ddc65490e193f00d4f29fbeb70b24fe.png)

4. 在授权结果页面复制 `NOTION_TOKEN`。
5. 在授权结果页面复制 `NOTION_PAGE`。

授权成功后页面大概如下，点击右侧的复制按钮即可：

![Notion 授权成功后复制 Token 和页面信息](https://cdn.notionhub.app/notionhub/weread2notion-open-source/notion-auth-success.webp)

::: tip
先把这两个值临时保存到本地备忘录里，后面会一起填到 GitHub Secrets。
:::

## 2. 获取微信读书 API Key

第二步获取 `WEREAD_API_KEY`，它用于读取你的微信读书数据。

1. 打开微信读书 Skills 页面：

   https://weread.qq.com/r/weread-skills

2. 使用微信读书账号登录。
3. 登录后点击 `创建 Key`。
4. 创建完成后点击 `复制 Key`，复制出来的内容就是后面要填写到 GitHub Secrets 里的 `WEREAD_API_KEY`。

![微信读书 API Key 获取示例](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread-api-key-guide.webp)

::: warning
API Key 可以读取你的微信读书数据，不要发给别人，也不要直接写到公开仓库代码里。
:::

## 3. Fork 项目

第三步把 WeRead2Notion 项目复制到你自己的 GitHub 账号下。对小白用户来说，直接 Fork 最简单，不需要自己创建 workflow 文件。

打开开源项目：

https://github.com/malinkang/weread2notion

点击右上角的 `Fork`，把项目复制到你自己的 GitHub 账号下。

![点击 GitHub 右上角 Fork 按钮](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-fork-button.webp)

进入创建 Fork 页面后，一般保持默认设置即可，然后点击 `Create fork`。

![创建 GitHub Fork](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-create-fork.webp)

::: tip
如果你觉得项目有用，Fork 的时候也可以顺手点一下 Star。
:::

Fork 完成后，进入你 Fork 后的仓库，点击 `Actions`。

![进入 GitHub Actions 并启用 workflow](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-actions-enable-main.webp)

如果 GitHub 提示需要启用 workflow，点击同意启用即可。

如果进入后看到 `weread sync` 还是 Disabled，可以先点击左侧的 `weread sync`，然后点击右侧的 `Enable workflow`。

![启用 weread sync workflow](https://cdn.notionhub.app/notionhub/weread2notion-open-source/weread2notion-actions-enable-workflow.webp)

## 4. 填写 GitHub Secrets

第四步把前面拿到的 3 个值填到 GitHub Secrets 里。

打开你 Fork 后的仓库，依次进入：

`Settings -> Secrets and variables -> Actions -> New repository secret`

![](https://images.malinkang.com/2024/03/660acb8a4038af66e27fe0f993ef3aad.jpg)

添加下面 3 个 Secret：

| Secret 名称 | 填写内容 |
| --- | --- |
| `WEREAD_API_KEY` | 第 2 步复制的微信读书 API Key |
| `NOTION_TOKEN` | 第 1 步授权后得到的 Token |
| `NOTION_PAGE` | 第 1 步授权后得到的模板页面链接 |

::: warning
Secret 名称必须完全一致，一个字母都不能错。值里面不要主动添加引号。
:::

## 5. 手动运行一次

进入仓库的 `Actions` 页面，选择 `weread sync`，点击 `Run workflow`。

![](https://images.malinkang.com/2024/03/58a654118607156d8a7dde7f6470504f.jpg)

运行成功后，打开 Notion 模板查看是否出现书籍页面。首次同步通常会慢一些，因为需要读取书籍、划线、想法和章节信息。

## 后续如何升级

如果后续项目有更新，你可以打开自己 Fork 的仓库首页，点击 `Sync fork`，把最新代码同步到你的仓库。

## Notion 模板属性要求

新版同步会在开始时动态读取你当前 Notion data source 的属性，不再强制要求所有属性都存在。

必须保留：

| 属性名 | 建议类型 | 用途 |
| --- | --- | --- |
| `BookId` | Rich text | 用于识别同一本书 |
| `Sort` | Number | 用于判断增量同步位置 |

可选属性：

| 属性名 | 建议类型 | 说明 |
| --- | --- | --- |
| `链接` | URL | 微信读书网页链接 |
| `作者` | Rich text | 作者 |
| `ISBN` | Rich text | ISBN |
| `评分` | Number | 评分 |
| `分类` | Multi-select | 书籍分类 |
| `状态` | Status 或 Select | 在读 / 读完 |
| `阅读进度` | Number | 小数格式，例如 `0.5`、`0.99`，建议在 Notion 中显示为 Percent |
| `阅读时长` | Rich text | 阅读时长文本 |
| `时间` | Date | 读完时间 |

如果你删除了某个可选属性，脚本会自动跳过它，不会因为缺少可选属性导致同步失败。

::: tip
同名属性不需要固定类型。例如 `状态` 可以是 Status，也可以是 Select；脚本会根据 Notion 里当前真实类型自动转换写入格式。
:::

## 已经 Fork 过的用户怎么办

如果你以前已经 Fork 过 `malinkang/weread2notion`，建议先打开自己的 Fork 仓库，点击 `Sync fork` 同步到最新版。

同步完成后，检查 GitHub Secrets 是否已经按本文改成下面 3 个：

- `WEREAD_API_KEY`
- `NOTION_TOKEN`
- `NOTION_PAGE`

旧版 Cookie 相关的 Secret 不再需要。

## 本地运行

如果你想在本地测试，可以直接从 GitHub 安装：

```bash
pip install "git+https://github.com/malinkang/weread2notion.git@v1"
```

然后设置环境变量：

```bash
export WEREAD_API_KEY="你的微信读书 API Key"
export NOTION_TOKEN="你的 Notion Token"
export NOTION_PAGE="你的 Notion 模板页面链接"
weread2notion sync
```

## 问题排查

### 1. GitHub Actions 显示红色失败

可以点击你 Fork 项目的 `Actions`，查看运行状态。绿色是成功，红色是失败。

![](https://images.malinkang.com/2024/03/ee23baaf257d9fa16f6f95950cd1e585.jpg)

点进失败的 Action，展开 `Sync WeRead to Notion` 日志。

![](https://images.malinkang.com/2024/03/34089868d5569f92c9138ade3ba99428.jpg)

![](https://images.malinkang.com/2024/03/27ab73fed87b15a3a55d05423bd90167.jpg)

### 2. 提示缺少 `BookId` 或 `Sort`

说明你的 Notion 模板里缺少必填属性。请在目标数据库里新增：

- `BookId`
- `Sort`

这两个名字需要保持一致。

### 3. 有些属性没有写入

如果你删除了 `链接`、`分类`、`评分`、`阅读进度` 等可选属性，脚本会自动跳过。要写入这些数据，请在 Notion 模板中重新添加对应属性。

### 4. 为什么有的书没有同步

开源版主要同步有划线或笔记的书。没有划线、没有想法、也没有进入笔记列表的书，可能不会出现在结果中。

### 5. 每天什么时候同步

示例 workflow 使用的是：

```yaml
schedule:
  - cron: "0 0 * * *"
```

这是 UTC 时间 0 点，对应北京时间早上 8 点。GitHub Actions 定时任务可能会有几分钟延迟。

## 升级建议

推荐始终使用：

```yaml
uses: malinkang/weread2notion@v1
```

这样可以自动获得 `v1` 内的兼容更新。

如果你希望完全固定版本，也可以使用具体 tag：

```yaml
uses: malinkang/weread2notion@v1.0.8
```

不过固定版本不会自动获得后续修复。

## 常见提醒

- 不要把 `WEREAD_API_KEY`、`NOTION_TOKEN` 直接写进公开仓库代码。
- 不要在同步生成的 Notion 书籍页面里直接添加自己的笔记；脚本发现书籍有新笔记时会删除旧页面并重建，手写内容可能会丢失。
- 如果需要补充个人笔记，建议单独新建页面或数据库，不要写在 WeRead2Notion 自动生成的页面里。
- 开源版 WeRead2Notion 请使用开源版对应的 Notion 模板，不要和其他微信读书同步模板混用。
- 如果你需要更完整的微信读书同步能力，可以使用 NotionHub 微信读书付费服务。

## 如果你想长期认真用，可以看看 NotionHub 微信读书

开源版 WeRead2Notion 适合想折腾、想自己维护 GitHub Actions 的用户。它的定位比较单一：把微信读书里的书籍、划线和想法同步到 Notion。

如果你希望把微信读书真正当成自己的阅读系统长期使用，更推荐 NotionHub 微信读书服务。

NotionHub 微信读书支持：

- **可以在 Notion 里写自己的笔记**：不会像开源版一样每次更新都删除整本书页面重建，更适合长期积累。
- **增量同步**：只同步新增或变化的数据，减少重复写入，也更适合数据量比较大的账号。
- **阅读热力图**：把每天阅读情况做成类似 GitHub Contributions 的热力图，直观看到自己的阅读习惯。
- **每日阅读数据同步到 Notion**：每天读了多久、读了几本、写了多少笔记、划了多少线，都可以沉淀到 Notion。
- **书架书籍同步到 Notion**：不只是同步有划线和笔记的书，也可以把微信读书书架里的书籍同步到 Notion。
- **更完整的阅读看板**：支持最近在读、书架、作者、分类、章节、阅读时长、阅读进度等更多维度。

预览效果：[https://malinkang.notion.site/book](https://malinkang.notion.site/book)

![NotionHub 微信读书预览](https://cdn.notionhub.app/notionhub/weread2notion-open-source/notionhub-weread-preview.webp)

简单来说：

- 如果你想在 Notion 里长期维护自己的阅读系统、写自己的笔记、看阅读统计和热力图，可以使用 NotionHub 微信读书。

NotionHub 还提供豆瓣、小宇宙播客、Flomo、Keep、网易云音乐等多种同步能力，适合把不同平台的数据统一整理到 Notion 中。
