# Claude Code Prompt: AI PM Portfolio Website

## 项目概述

帮我搭建一个 AI PM 个人作品集网站。我是翁冀（Ji Weng），正在从游戏运营（10年经验）转型 AI 产品经理。这个网站是我求职作品集的主站，目标受众是国内大厂的 HR 和 hiring manager。

## 技术栈

- **框架**: Next.js 14+ (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel
- **内容管理**: 本地 Markdown/MDX 文件（不用 CMS）

## 设计方向

- **语言**: 中文主体，技术术语保留英文
- **风格**: 深色主题，editorial/杂志感，专业但不死板。参考调性：沉稳的科技感 + 一点热烈的个性
- **色彩体系**:
  - 背景：深色系（近黑，如 `#0A0A0F`）
  - 主文字：白/浅灰
  - **Accent / 强调色：粉色系**。这是整个站的视觉辨识度核心。用于 CTA 按钮、链接 hover、标签高亮、分隔线、进度指示等关键交互元素。建议使用偏暖的活力粉（如 `#FF6B8A` 或 `#F472B6`），不要用太浅太甜的粉——目标是"热烈、有个性"而不是"可爱"。可以搭配极少量的冷白或浅灰作为次级强调
  - 辅助色：项目分类标签可以用低饱和度的彩色区分（但粉色仍然是主视觉）
- **字体**: 中文用 Noto Sans SC / Noto Serif SC，英文用有个性的 display font（非 Inter/Roboto），代码用 JetBrains Mono
- **响应式**: 移动端优先，确保手机上阅读体验好（HR 可能用手机看）

## 网站结构

### 单页长滚动首页 + 项目详情子页

```
/                     → 首页（以下所有 section 的长滚动）
/projects/[slug]      → 项目详情页（每个项目一个子页）
```

### 首页 Sections（从上到下）:

1. **Hero**
   - 名字、一句话定位、CTA（查看项目 / 下载PDF）
   - 视觉上要有冲击力

2. **About**
   - 简短自我介绍（游戏运营→AI PM 的转型故事）
   - 关键标签/技能矩阵
   - 教育背景

3. **Projects**（核心区域，占最多篇幅）
   - 卡片网格展示所有项目
   - 每张卡片：项目名、一句话描述、AI能力标签、缩略图
   - 点击进入项目详情子页
   - **按 AI 能力线分组显示**（见下方项目数据结构）

4. **Experience**
   - 简版工作经历时间线
   - 关键成就用数据说话

5. **Contact**
   - 邮箱、GitHub、LinkedIn、微信二维码（可选）

## ⭐ 关键架构要求：内容数据驱动

这是最重要的设计决策。我需要网站具备 **轻松增减项目** 的能力，所以所有项目内容必须数据驱动，不能硬编码在组件里。

### 项目数据结构

在 `/content/projects/` 目录下，每个项目是一个文件夹：

```
/content/projects/
  ├── game-market-agent/
  │   ├── meta.json          ← 项目元数据
  │   ├── content.mdx        ← 项目详情（Case Study）
  │   ├── changelog.json     ← 版本更新日记
  │   └── assets/            ← 截图、架构图等
  ├── gog-rag-bot/
  │   ├── meta.json
  │   ├── content.mdx
  │   ├── changelog.json
  │   └── assets/
  ├── andrew/
  │   └── ...
  └── ...
```

### meta.json 结构

```json
{
  "slug": "game-market-agent",
  "title": "游戏竞品分析 Agent",
  "subtitle": "用AI Agent自动生成游戏竞品周报",
  "description": "一句话描述，用于卡片展示",
  "category": "agent",
  "tags": ["Agent", "Tool Use", "Function Calling", "飞书集成"],
  "techStack": ["FastAPI", "React", "DashScope/Qwen", "SensorTower API"],
  "status": "shipped",
  "priority": 1,
  "featured": true,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "https://...",
  "github": "https://github.com/...",
  "createdAt": "2025-12-01",
  "updatedAt": "2026-03-15"
}
```

字段说明：
- `category`: 用于分组显示，可选值 `"agent"` | `"rag"` | `"memory"` | `"content"` | `"foundation"`
- `priority`: 数字越小排越前，控制项目展示顺序
- `featured`: 首页是否重点展示（占更大卡片）
- `visible`: 设为 false 可以隐藏项目而不删除（方便我增减项目）
- `status`: `"shipped"` | `"in-progress"` | `"planned"`

### changelog.json 结构

每个项目维护一个版本更新日记。网站默认只展示最新版本的内容，但保留完整迭代历史：

```json
{
  "entries": [
    {
      "version": "1.2",
      "date": "2026-03-15",
      "title": "新增飞书自动推送",
      "summary": "接入飞书 Webhook，竞品周报自动推送到指定群组",
      "changes": [
        "接入飞书 Incoming Webhook API",
        "支持自定义推送频率（每日/每周）",
        "添加推送消息模板"
      ]
    },
    {
      "version": "1.1",
      "date": "2026-02-20",
      "title": "优化数据可视化",
      "summary": "...",
      "changes": ["..."]
    },
    {
      "version": "1.0",
      "date": "2025-12-01",
      "title": "MVP 上线",
      "summary": "...",
      "changes": ["..."]
    }
  ]
}
```

### Category 分组配置

```
/content/categories.json
```

```json
[
  {
    "id": "agent",
    "label": "🤖 Agent × 工具调用",
    "description": "Multi-step planning, tool use, model routing"
  },
  {
    "id": "rag",
    "label": "🔍 RAG × 检索增强",
    "description": "检索增强生成，知识库构建"
  },
  {
    "id": "memory",
    "label": "🧠 记忆 × 个性化",
    "description": "用户记忆，个性化交互"
  },
  {
    "id": "content",
    "label": "✍️ 内容 × 产品思维",
    "description": "内容创作，产品实验"
  },
  {
    "id": "foundation",
    "label": "🔧 技术基础",
    "description": "工程能力，数据管道"
  }
]
```

## 当前项目列表

以下是我目前确定要放的项目。请先用这些数据创建对应的 meta.json 和空的 content.mdx / changelog.json 文件：

### 核心项目

1. **Game Market Intelligence Agent** (category: agent, priority: 1, featured: true)
   - 用AI Agent自动生成游戏竞品周报
   - Tech: FastAPI, React, DashScope/Qwen, SensorTower API, 飞书 Webhook

2. **GoG RAG 客服机器人** (category: rag, priority: 2, featured: true)
   - 用RAG重构游戏客服体验
   - Tech: FastAPI, React/Vite, DashScope/Qwen, Supabase pgvector, HuggingFace Embeddings

3. **Andrew / Talk to Ji** (category: memory, priority: 3, featured: true)
   - 让AI真正"记住"用户的个性化助手
   - Tech: Next.js, DashScope/Qwen, Supabase, 流式对话

4. **One Prompt Away + Robot Leaderboard** (category: content, priority: 4, featured: false)
   - AI行业深度分析Newsletter + 机器人排行榜产品实验
   - Tech: 微信公众号, Next.js, Vercel

### 技术基础项目（轻量展示）

5. **AWS 数据 Pipeline** (category: foundation, priority: 10, featured: false)
   - placeholder，具体内容后续填充

6. **NLP Sentiment Analysis** (category: foundation, priority: 11, featured: false)
   - placeholder，具体内容后续填充

## 项目详情页模板

每个项目详情页 (`/projects/[slug]`) 应该包含：

1. **Header**: 项目名 + 一句话描述 + 技术栈标签 + Live Demo / GitHub 链接
2. **正文区域**: 渲染 content.mdx（Case Study 内容，后续我会填写）
3. **Changelog 区域**: 可展开/收起的版本更新日记，默认展示最新一条，点击 "查看全部更新" 可展开历史
4. **底部导航**: 上一个项目 / 下一个项目

## DO NOT

- ❌ 不要使用任何 CMS（Contentlayer、Sanity、Strapi 等），纯本地文件即可
- ❌ 不要添加博客功能，这不是博客站
- ❌ 不要添加暗色/亮色主题切换，只用深色主题
- ❌ 不要使用 Inter、Roboto、Arial 等泛用字体
- ❌ 不要加过多的动画效果，保持简洁专业
- ❌ 不要在首页展示 changelog，changelog 只在项目详情页出现
- ❌ 不要安装不必要的依赖，保持项目轻量
- ❌ content.mdx 文件只创建空模板，不要帮我编造项目内容

## 第一步

1. 初始化 Next.js 项目 + Tailwind + TypeScript
2. 搭建文件目录结构（包括 /content/projects/ 下所有项目文件夹和空文件）
3. 实现内容读取工具函数（读取 meta.json、content.mdx、changelog.json）
4. 实现首页框架（所有 section 的骨架，内容用 placeholder）
5. 实现项目详情页模板（能正确读取并渲染对应项目的数据）
6. 确保 `visible: false` 的项目不会出现在页面上
7. 确保增加新项目只需要在 /content/projects/ 下新建文件夹并填充 meta.json 即可

先把框架跑起来，我后续会逐步填充每个项目的 Case Study 内容和 changelog。
