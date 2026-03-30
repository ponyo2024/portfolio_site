# Portfolio 网站修改 Prompt

## 修改 1: 拆分 One Prompt Away 和 Robot Leaderboard 为两个独立项目

当前 "One Prompt Away + Robot Leaderboard" 是合并在一个项目卡片里的。请拆成两个独立项目：

### 项目 A: One Prompt Away（微信公众号）

创建 `/content/projects/one-prompt-away/meta.json`:
```json
{
  "slug": "one-prompt-away",
  "title": "One Prompt Away",
  "subtitle": "AI行业深度观察公众号",
  "description": "运营 AI 行业深度分析 Newsletter，覆盖 agentic engineering、人形机器人、全球 AI 基础设施投资等主题",
  "category": "content",
  "tags": ["Newsletter", "内容运营", "AI行业分析", "微信公众号"],
  "techStack": ["微信公众号"],
  "status": "shipped",
  "priority": 4,
  "featured": false,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "",
  "github": "",
  "createdAt": "2026-02-01",
  "updatedAt": "2026-03-20"
}
```

创建空的 `content.mdx`、`changelog.json`、`assets/` 目录。

### 项目 B: Robot Leaderboard

创建 `/content/projects/robot-leaderboard/meta.json`:
```json
{
  "slug": "robot-leaderboard",
  "title": "Robot Leaderboard",
  "subtitle": "全球机器人能力排行榜",
  "description": "按能力领域分类的全球机器人排行榜网站，从公众号内容孵化的轻量级产品实验",
  "category": "content",
  "tags": ["产品实验", "数据可视化", "用户研究", "Next.js"],
  "techStack": ["Next.js", "Vercel", "JSON"],
  "status": "shipped",
  "priority": 5,
  "featured": false,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "",
  "github": "",
  "createdAt": "2026-02-15",
  "updatedAt": "2026-03-20"
}
```

创建空的 `content.mdx`、`changelog.json`、`assets/` 目录。

### 删除旧的合并项目

删除 `/content/projects/one-prompt-away-robot-leaderboard/`（或它当前的文件夹名），确保首页不再显示合并版本。

---

## 修改 2: 视觉细节优化

### 粉色使用收敛

当前问题：项目名、副标题、placeholder 文字、category 标签全部是粉色，没有层次。

修改规则：
- **项目名（title）**: 白色 `#F0F0F0`，不用粉色
- **副标题（subtitle）**: 浅灰 `#9A9AB0`，不用粉色
- **正文描述**: 灰色 `#7A7A8E`
- **category 标签**（Agent / RAG / 记忆 等）: 粉色背景 `rgba(255,107,138,0.15)` + 粉色文字 `#FF6B8A`——这是卡片上唯一使用粉色的元素
- **tech stack 标签**: 灰色边框 + 灰色文字，不用粉色
- **hover 状态**: 卡片边框变粉色 `rgba(255,107,138,0.3)`，这是第二个使用粉色的地方
- **CTA 按钮（下载 PDF）**: 粉色，这是第三个使用粉色的地方
- **Nav bar 导航文字**: 白色/灰色，hover 时粉色

总结：粉色只出现在三个地方——category 标签、hover 边框、CTA 按钮。其他一律白色/灰色。

### Placeholder 图片统一风格

当前问题：Featured 大卡片和底部小卡片的 placeholder 颜色不统一。

修改：所有 placeholder 统一使用同一个暗色背景 `#1A1A2E`，中间显示一个简单的 icon 或线框（不要显示项目名文字——项目名已经在文字区域显示了，placeholder 里再显示一遍是冗余的）。如果不方便加 icon，placeholder 区域就保持纯暗色 + 一个居中的小图标占位符（比如一个相机 icon 或图片 icon，用 `#2A2A40` 色，非常低调）。

### 联系方式区域

当前问题：底部联系方式太随意，就一行文字。

修改：
- 加一条细分隔线（`border-top: 1px solid rgba(255,255,255,0.06)`）
- 联系方式用简洁的一行布局：`Email · GitHub · LinkedIn`，每个是可点击链接
- 底部加 `© 2026 翁冀` 的 footer 文字
- 整体 padding 加大，给页面一个干净的收尾

### 卡片间距

- Featured 大卡片之间的间距适当加大（至少 24px gap）
- 底部小卡片与 Featured 卡片之间加更多留白（至少 48px）
- 页面底部联系方式与最后一张卡片之间加至少 80px 留白
