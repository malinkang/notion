---
outline: deep
---

# Keep 健康数据同步

健康是一切的基础，但我们往往只在失去它时才意识到它的珍贵。运动、睡眠、心率、血氧……这些散落在各个 App 里的数字，其实是你身体每天写给你的一封信。可惜大多数时候，我们只是匆匆扫一眼就忘了。

本项目通过 Keep App 将健康数据同步到 Notion。Keep 支持接入苹果健康、小米健康、华为健康等主流平台的数据，无论你使用哪款设备，都可以先将数据汇聚到 Keep，再由我们同步到 Notion。**购买前请先确认你的健康数据能正常同步到 Keep。**

**把健康数据同步到 Notion，你能做到的远不止「记录」：**

- **可视化你的坚持** — 年度运动热力图一眼看清你的运动节奏，哪些日子在燃烧，哪些日子在偷懒
- **看见睡眠的真相** — 热力图用红黄绿三色标记每一天的睡眠质量，趋势比单次数据更有意义
- **让 AI 成为你的健康顾问** — 数据进入 Notion 后，你可以随时让 AI 分析你的运动规律、睡眠趋势，给出个性化的改善建议
- **所有数据，一个入口** — 运动、睡眠、心率、体重、血氧、最大摄氧量，在 Notion 中统一管理，不再碎片化

## 功能介绍

Notion 预览：https://malinkang.notion.site/keep?source=copy_link

![](https://images.malinkang.com/2026/03/68c709f149b972aa3ef7bb8150c6f02e.png)

### 运动数据

![运动数据预览](https://images.malinkang.com/2026/03/0cb1849b6dcc0fec285c73ae5ba7034e.png)

- **运动记录**：每次运动的详细记录，包括运动类型、时长、消耗卡路里等
- **GPX 轨迹**：支持将运动轨迹文件上传到 Notion，方便回顾运动路线
- **运动封面**：自动上传运动封面图片到 Notion
- **运动类型**：自动识别并分类不同的运动类型
- **运动热力图**：自动生成年度运动热力图，每种运动类型也有独立的热力图
- **统计数据**：按日、周、月、年维度自动汇总运动数据
- **我的装备**：运动鞋、智能穿戴、自行车、运动器械等装备管理

![我的装备预览](https://images.malinkang.com/2026/03/30bf12d58e198be9e215cc0a0b6aab1d.png)

### 睡眠数据

![睡眠数据预览](https://images.malinkang.com/2026/03/a682d6b9fe77205808c1a71e29b86f3b.png)

- **睡眠记录**：每天的睡眠数据，包括入睡时间、起床时间、睡眠时长
- **睡眠阶段**：深睡、浅睡、REM 等睡眠阶段的详细数据
- **睡眠热力图**：自动生成年度睡眠热力图，颜色编码反映睡眠质量
  - 🔴 红色：睡眠不足（少于 6 小时 / 4 个睡眠周期）
  - 🟡 黄色：睡眠一般（6-7.5 小时 / 4-5 个睡眠周期）
  - 🟢 绿色：睡眠充足（超过 7.5 小时 / 5 个睡眠周期以上）
- **统计数据**：按日、周、月、年维度自动汇总睡眠数据

### 其他健康数据

- **体重**：体重变化记录

![体重数据预览](https://images.malinkang.com/2026/03/bbe1e73ac2df13938c288b9d26b79257.png)

- **心率**：静息心率数据

![心率数据预览](https://images.malinkang.com/2026/03/3a94682f15a83ea0e5ed0be2b8ed0414.png)

- **血氧**：血氧饱和度数据

![血氧数据预览](https://images.malinkang.com/2026/03/1daae312268a78792334b6ddc089c64a.png)

- **最大摄氧量（VO2Max）**：有氧能力评估数据

![最大摄氧量数据预览](https://images.malinkang.com/2026/03/9deebca702618fb692196a8eec80731f.png)

## 使用步骤

使用之前如果没有安装插件请先参考安装指南：https://docs.notionhub.app/install

### 1. 点击打开插件，然后点击去使用

在插件列表中找到 Keep，点击`去使用`。

![](https://images.malinkang.com/2026/03/f4ea5785102ad8c433aa6db4fab984cf.png)

### 2. 输入激活码，点击激活

如果还没有激活码，请扫描图中微信二维码咨询购买。

![](https://images.malinkang.com/2026/03/9817d2b257f1be0a58f15b6c21f0923e.png)

### 3. 复制模板链接

点击`复制 Notion 模板`按钮，会打开一个链接。

![](https://images.malinkang.com/2026/03/e678656f76694e4be8206409484e1266.png)

点击`下一步`。

![](https://images.malinkang.com/2026/03/fa4292b0f0a0d07cfea56041b97dabe8.png)

选择使用`开发人员提供的模板`，然后点击`允许访问`。

![](https://images.malinkang.com/2026/03/b19c9c90da559daacb9548bb1aafad35.png)

### 4. 登录 Keep

授权完成后，点击`登录 Keep`按钮。

![](https://images.malinkang.com/2026/03/5752629549b04f10bd37d3796d67f7a3.png)

输入你的 Keep 账号（手机号）和密码进行登录。

![](https://images.malinkang.com/2026/03/ca2c7a25d7c9f6bfc2ddcb04a5cb8478.png)

### 5. 运行

登录完成后，点击`开始同步`按钮开始同步。

![](https://images.malinkang.com/2026/03/c71bc499b62da670c6bca989ba58042b.png)

### 6. 查看数据

点击运行之后，可以点击`打开 Notion 模板`按钮查看模板里是否有数据。一般一两分钟左右就会有数据。

