# 下書きの書き方

下書きは front matter に `draft: true` を付けるだけです。

```markdown
---
title: "まだ公開しない記事"
date: 2026-06-21
draft: true
tags: []
summary: ""
---

本文はいつも通り書けます。
```

## 動作

| コマンド | 下書きの扱い |
|---|---|
| `npm run dev` | **表示される**（ローカルで確認できる） |
| `npm run build` | **含まれない**（本番サイトに出ない） |

## 公開する手順

1. `draft: false` に変更する
2. 必要なら `date` を公開日に合わせる
3. `npm run build` → `npm run deploy`

それだけです。

## 補足

- 下書きのまま Git に commit して問題ありません（ビルドに含まれないため）
- タイトルや本文は未完成のままでも、`draft: true` なら本番には出ません
