# 星月澪的博客内容

主题代码：https://github.com/HoshizukiMio/hoshizukimio-shirone-blog

此仓库采用 Shirone 官方内容分离结构：

- `content/posts/`：文章。推荐 `my-first-post/index.md` 和同目录配图。
- `content/moments/`：动态；`content/series/`：系列；`content/spec/`：关于与友链说明。
- `config/*.yaml`：个人配置覆盖；未填写的字段继承主题默认值。
- `data/*.ts`：友链、项目等数据。
- `assets/`：参与构建优化的原图；`public/images/`：直接通过 `/images/...` 使用的图片。

## 发布文章

新建 `content/posts/my-first-post/index.md`：

```markdown
---
title: 我的第一篇文章
published: 2026-10-16
description: 文章摘要
tags: [日常]
category: 随笔
draft: false
---

这里开始写正文。
```

在此仓库目录执行：

```powershell
git add content/posts/my-first-post
git commit -m "docs(posts): publish my first post"
git push
```

推送到 `main` 后，GitHub Actions 自动调用 Vercel Deploy Hook，构建时通过官方 `content:sync` 拉取内容并发布到 https://blog.hoshizukimio.com/ 。构建需要几分钟，可在 Actions 和 Vercel 查看结果。

本仓库为公开仓库。API 密钥、登录凭据等仅存于 Vercel / GitHub Secrets；不要写入文件。

官方文档：https://docs.shirone.mysqil.com/guide/content-separation/init-repo
