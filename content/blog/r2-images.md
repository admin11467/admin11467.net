---
title: "R2配信の画像を記事に貼る"
date: 2024-03-25
draft: false
tags: ["hugo", "cloudflare", "r2"]
summary: "assets-src/に置いた画像をR2へ同期し、記事内で参照する最小手順。"
---

`assets-src/` に置いた画像を R2 へ同期し、記事内で参照する最小手順をまとめます。

## 手順

1. 画像を `assets-src/` に配置する
2. R2 バケットへ同期する
3. 記事内で R2 の URL を参照する

```markdown
![説明](https://assets.admin11467.net/example.png)
```

これで Hugo ビルド時にローカル画像を含めず、R2 から配信できます。
