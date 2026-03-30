# Portfolio 网站修改：添加 3 个学校项目

## 概述

在 "技术基础" (foundation) 分类下，将现有的 "AWS 数据 Pipeline" 和 "NLP Sentiment Analysis" 两个 placeholder 替换为以下 3 个真实的学校课程项目。

## 操作步骤

### 1. 删除旧的 placeholder 项目

删除以下目录（如果存在）：
- `/content/projects/aws-pipeline/`
- `/content/projects/nlp-sentiment/`

### 2. 创建项目 A: Global Mobile Game Market Data Mining

创建 `/content/projects/game-market-datamining/meta.json`:
```json
{
  "slug": "game-market-datamining",
  "title": "全球手游市场数据挖掘",
  "subtitle": "用数据挖掘拆解全球移动游戏市场格局",
  "description": "基于 115 万行 SensorTower 真实数据，对全球 Top 10,000 手游进行趋势预测、国家聚类和品类分析，输出可执行的市场策略",
  "category": "foundation",
  "tags": ["Data Mining", "聚类分析", "市场预测", "游戏分析", "Python"],
  "techStack": ["Python", "K-Means", "PCA", "Linear Regression", "pandas"],
  "status": "shipped",
  "priority": 8,
  "featured": false,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "",
  "github": "",
  "createdAt": "2025-06-01",
  "updatedAt": "2025-08-01"
}
```

创建 `/content/projects/game-market-datamining/content.mdx`:
```mdx
# 全球手游市场数据挖掘

## 项目背景

待填写：IE 7275 Data Mining in Engineering 课程项目。基于游戏运营10年的行业经验，选择用数据挖掘方法系统分析全球移动游戏市场。

## 数据与方法

待填写：
- 数据来源：SensorTower 导出，115 万行，覆盖全球 Top 10,000 apps、21 个高 GDP 国家
- 分析方法：K-Means / Hierarchical Clustering / DBSCAN 聚类、PCA 降维、线性回归预测

## 核心发现

待填写：
- 2020-2024 全球下载与收入趋势 + 2025 预测
- 国家层面聚类：识别不同市场 archetype
- 品类与平台对比：iOS vs Android 变现差异
- 游戏层面聚类：头部产品特征分析

## PM 视角

待填写：这个项目与我后续做的 Game Market Intelligence Agent 形成上下游关系——学校里用传统数据挖掘方法做市场分析，工作后用 AI Agent 自动化这个流程。
```

创建空的 `changelog.json`:
```json
{ "entries": [] }
```

创建 `assets/` 目录。

---

### 3. 创建项目 B: NLP Triage Assistant

创建 `/content/projects/nlp-triage-assistant/meta.json`:
```json
{
  "slug": "nlp-triage-assistant",
  "title": "NLP 症状分诊助手",
  "subtitle": "从文本分类到可交互 Chatbot 的端到端 AI 应用",
  "description": "基于症状文本预测 41 种疾病，集成 Chatbot 交互和附近诊所推荐，用 baseline 对比证明模型选择必须服从数据特征",
  "category": "foundation",
  "tags": ["NLP", "BioBERT", "文本分类", "Chatbot", "Healthcare AI"],
  "techStack": ["BioBERT", "TF-IDF", "Logistic Regression", "spaCy", "Google Places API"],
  "status": "shipped",
  "priority": 9,
  "featured": false,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "",
  "github": "",
  "createdAt": "2025-03-01",
  "updatedAt": "2025-05-01"
}
```

创建 `/content/projects/nlp-triage-assistant/content.mdx`:
```mdx
# NLP 症状分诊助手

## 项目背景

待填写：IE 7500 课程项目。构建一个从症状文本预测疾病的 NLP 系统，并将模型集成到 Chatbot 中。

## 技术方案

待填写：
- Baseline: TF-IDF + Logistic Regression
- 进阶: BioBERT fine-tuning
- Chatbot 集成：用户输入症状 → 疾病预测 → 免责声明 → 附近诊所推荐（Google Places API）

## 关键发现

待填写：在该数据集上（2183 样本，41 类，类别不平衡），TF-IDF + Logistic Regression baseline 的表现优于 BioBERT。这一反直觉的结果恰好说明：模型选择必须服从数据特征，不是越大越好。

## PM 视角

待填写：这个项目展示了"把 NLP 模型接成实际应用"的完整链路，以及数据驱动的模型选择思维。
```

创建空的 `changelog.json`:
```json
{ "entries": [] }
```

创建 `assets/` 目录。

---

### 4. 创建项目 C: Cloud Data Pipeline for Housing Market

创建 `/content/projects/housing-data-pipeline/meta.json`:
```json
{
  "slug": "housing-data-pipeline",
  "title": "房地产市场云端数据管道",
  "subtitle": "从公开数据到云端分析的端到端数据工程项目",
  "description": "整合 Jacksonville 房产税卷、成交记录和 GIS 数据，基于 AWS 构建完整的数据采集→清洗→建模→可视化管道",
  "category": "foundation",
  "tags": ["数据工程", "AWS", "SQL", "Tableau", "ETL"],
  "techStack": ["AWS S3", "Glue Crawler", "Athena", "SQL", "Tableau", "Python"],
  "status": "shipped",
  "priority": 10,
  "featured": false,
  "visible": true,
  "thumbnail": "./assets/thumbnail.png",
  "liveDemo": "",
  "github": "",
  "createdAt": "2025-01-01",
  "updatedAt": "2025-03-01"
}
```

创建 `/content/projects/housing-data-pipeline/content.mdx`:
```mdx
# 房地产市场云端数据管道

## 项目背景

待填写：IE 6750 Data Warehousing & Integration 课程项目。基于 Jacksonville / Duval County 的公开房地产数据，构建端到端的云端数据分析管道。

## 数据源与架构

待填写：
- 数据源：Duval County Property Appraiser 房产税卷、成交记录、GIS parcel 数据、FHFA House Price Index
- 架构：Python 数据清洗 → AWS S3 存储 → Glue Crawler → Athena CTAS → Parquet → Tableau 可视化

## 核心功能

待填写：
- 数据清洗与标准化
- 云端数据仓库建模（Star Schema）
- Athena SQL 查询层设计
- Tableau Drill-down Dashboard

## PM 视角

待填写：这个项目证明我能独立搭建完整的数据系统——从原始数据到最终业务洞察。
```

创建空的 `changelog.json`:
```json
{ "entries": [] }
```

创建 `assets/` 目录。

---

### 5. 更新 categories.json

确认 `foundation` 分类的描述更新为：

```json
{
  "id": "foundation",
  "label": "🔧 技术基础",
  "description": "数据工程、数据挖掘、NLP 应用开发"
}
```

### 6. 确认首页展示

确认这 3 个新项目在首页以小卡片形式展示（featured: false），排在核心项目之后。确认旧的 "AWS 数据 Pipeline" 和 "NLP Sentiment Analysis" placeholder 不再显示。
