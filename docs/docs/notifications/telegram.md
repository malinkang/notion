---
outline: deep
---

# Telegram 通知配置

NotionHub 可以把同步开始、同步成功、同步失败等运行结果发送到 Telegram。

配置 Telegram 通知前，需要先准备两个信息：

- Bot Token：Telegram 机器人令牌
- Chat ID：接收通知的个人、群组或频道 ID

## 一、如何申请

### 1. 创建 Telegram 机器人

打开 Telegram，搜索官方机器人 `@BotFather`。

向 `@BotFather` 发送：

```text
/newbot
```

按提示填写机器人名称和用户名。创建成功后，`@BotFather` 会返回一段 Bot Token，格式大致如下：

```text
1234567890:AAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

请保存这段 Token，后续需要填写到 NotionHub 插件中。

### 2. 获取 Chat ID

如果通知发送到个人聊天：

1. 打开你刚创建的机器人。
2. 点击 `Start`，或发送一条任意消息。
3. 访问下面的地址，将 `{BOT_TOKEN}` 替换成你的 Bot Token：

```text
https://api.telegram.org/bot{BOT_TOKEN}/getUpdates
```

返回内容中的 `chat.id` 就是 Chat ID。

如果通知发送到群组或频道：

1. 将机器人加入目标群组或频道。
2. 在群组里发送一条消息，或让机器人能收到一条消息。
3. 再访问 `getUpdates` 地址查看 `chat.id`。

群组或频道的 Chat ID 通常是负数。

## 二、如何在插件中配置

1. 打开 NotionHub 浏览器插件。
2. 进入需要接收通知的同步服务。
3. 找到通知配置区域。
4. 通知平台选择 `Telegram`。
5. 填写 Bot Token。
6. 填写 Chat ID。
7. 点击保存或提交。
8. 运行一次同步，检查 Telegram 是否收到通知。

后续可以补充截图：

- `@BotFather` 创建机器人的截图
- `getUpdates` 获取 Chat ID 的截图
- NotionHub 插件中 Telegram 配置区域的截图

## 常见问题

如果收不到通知，优先检查：

- Bot Token 是否复制完整。
- Chat ID 是否填写正确。
- 是否已经先和机器人对话，或已经把机器人加入群组。
- 群组或频道是否允许机器人发送消息。
