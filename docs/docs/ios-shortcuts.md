---
outline: deep
---

# 使用iPhone快捷指令触发微信读书，flomo，keep，滴答清单，豆瓣等服务自动到 Notion

NotionHub 已经取消服务端统一自动同步，推荐改用 iOS 快捷指令按需触发同步。

取消服务端自动同步主要有三个原因：

- 同一时间大量服务一起同步，会给服务器带来较大压力。
- 每天固定时间访问微信读书等第三方服务，可能被识别为异常自动化访问，存在账号风控风险。
- 定时同步不够及时，数据可能要等到下一次任务执行才会更新。

如果你希望在某个具体动作之后立刻同步，比如关闭微信读书后马上同步笔记，就可以使用 iOS 快捷指令手动触发同步。

你也可以把快捷指令配合 iOS 自动化使用，实现关闭 App、到达指定时间、连接 Wi-Fi 后自动触发同步。

## 第一步：获取快捷指令

先安装你需要同步服务对应的快捷指令：

- 微信读书同步：https://www.icloud.com/shortcuts/d3f64d33b3f5490fbe75b28512b6f68a
- 小宇宙同步：https://www.icloud.com/shortcuts/dfac54f779a149c89c27fcd5f42b488e
- 滴答清单同步：https://www.icloud.com/shortcuts/2968ff4ca62e40b3b31d1355bd37697f
- flomo 同步：https://www.icloud.com/shortcuts/d74cd548abf3457d8a703f736e14a5f5
- 豆瓣同步：https://www.icloud.com/shortcuts/06199172fa514283b132ed4ce74b14dd
- Keep 同步：https://www.icloud.com/shortcuts/4c6e44eeb15040548c71809e57580ac3

打开链接后，点击「获取快捷指令」，把对应服务的快捷指令添加到你的 iPhone。

## 第二步：填写 userId

打开你刚刚添加的快捷指令，把里面的 `userId` 改成你自己的 NotionHub 用户 ID。

![填写 userId](https://cdn.notionhub.app/notionhub/ios-shortcuts/fill-user-id.png)

如果不知道如何获取 `userId`，可以参考下面的视频：

<video src="https://cdn.notionhub.app/notionhub/ios-shortcuts/get-notion-user-id.mp4" controls playsinline style="width: 100%; border-radius: 8px;"></video>

每个快捷指令都已经内置了对应的同步服务，你不需要再填写其它参数。

如果你想同步多个服务，分别安装对应服务的快捷指令，然后在每个快捷指令里填入同一个 `userId` 即可。

## 第三步：配合自动化

接下来可以通过 iOS 自动化，实现关闭 App 后自动同步。

以关闭微信读书后同步笔记为例：

1. 打开 iPhone 上的「快捷指令」App。
2. 切换到底部「自动化」标签，然后点击右上角 `+`。
3. 在触发条件列表里选择「App」。
![](https://cdn.notionhub.app/CleanShot%202026-05-07%20at%2010.33.13%402x.png)
4. 点击「App」右侧的「选取」，选择「微信读书」。
5. 勾选「已关闭」，不要勾选「已打开」。
6. 在下方选择「立即运行」，并关闭「运行时通知」。
7. 点击「下一步」。
![](https://cdn.notionhub.app/CleanShot%202026-05-07%20at%2010.36.01%402x.png)

8. 选择刚安装的微信同步到 notion的快捷指令。


设置完成后，每次关闭微信读书，iOS 都会自动运行这个快捷指令，并触发 NotionHub 同步微信读书数据。

同理，你也可以设置：

| 场景 | 推荐动作 |
| --- | --- |
| 关闭微信读书 App | 运行「同步微信读书」快捷指令 |
| 关闭小宇宙 App | 运行「同步小宇宙」快捷指令 |
| 关闭豆瓣 App | 运行「同步豆瓣」快捷指令 |
| 关闭滴答清单 App | 运行「同步滴答清单」快捷指令 |
| 关闭 Keep App | 运行「同步 Keep」快捷指令 |
| 每天晚上固定时间 | 运行你想定时同步的快捷指令 |

## 注意事项

- 每个服务每天有触发次数限制，避免误触发导致频繁同步。
- 快捷指令只负责触发同步，真正的同步仍在 NotionHub 云端执行。
- 如果返回同步已开始，但 Notion 中没有变化，可能是当前服务没有新数据，或同步任务仍在执行中。
