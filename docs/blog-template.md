# ブログ記事テンプレート

`content/blog/` に新しい `.md` ファイルを作り、以下をコピーして使ってください。

---

```markdown
---
title: "記事タイトルをここに書く"
date: 2026-06-21
draft: true
tags: ["hugo", "メモ"]
summary: "一覧や RSS に表示される短い要約（1〜2 文）。"
---

ここから本文を書きます。

## 見出し

段落テキスト。Markdown の通常の書き方が使えます。

### コード例

```go
fmt.Println("Hello")
```

### 画像（R2 配信）

```markdown
![説明テキスト](https://assets.admin11467.net/example.png)
```

### 箇条書き

- 項目 1
- 項目 2

## まとめ

最後に要点を書く。
```

---

## front matter の項目

| 項目 | 必須 | 説明 |
|---|---|---|
| `title` | ○ | 記事タイトル |
| `date` | ○ | 公開日（`YYYY-MM-DD`） |
| `draft` | ○ | `true` = 下書き、`false` = 公開 |
| `tags` | 任意 | タグの配列。`/tags/` ページにリンクされる |
| `summary` | 任意 | 一覧表示用の短い要約 |

## 公開するとき

1. `draft: false` に変更
2. `npm run build` でエラーがないか確認
3. デプロイ（[getting-started.md](getting-started.md) 参照）

## 既存記事の例

`content/blog/r2-images.md` を参考にしてください。
