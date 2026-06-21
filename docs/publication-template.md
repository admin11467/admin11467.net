# Publications テンプレート

論文・登壇・受賞・プロジェクト実績などを `content/publications/` に追加するときのテンプレートです。

---

```markdown
---
title: "論文タイトルまたはプロジェクト名"
date: 2026-03-15
draft: false
tags: ["論文", "学会"]
summary: "どんな成果かを 1 文で。"
---

## 概要

成果の背景・目的を短く書く。

## 詳細

- **種別**: 論文 / 登壇 / 受賞 / プロジェクト など
- **日付**: 2026 年 3 月
- **リンク**: [論文 PDF](https://example.com/paper.pdf)

## 補足

関連するブログ記事や GitHub リポジトリがあればここに書く。
```

---

## 別パターン: 登壇・イベント

```markdown
---
title: "〇〇カンファレンス 2026 — タイトル"
date: 2026-05-10
draft: false
tags: ["登壇", "イベント"]
summary: "〇〇について発表した。"
---

## 概要

イベント名・セッションタイトル・発表内容の要約。

## リンク

- [発表資料](https://example.com/slides.pdf)
- [イベントページ](https://example.com/event)
```

---

## front matter の項目

| 項目 | 必須 | 説明 |
|---|---|---|
| `title` | ○ | 成果のタイトル |
| `date` | ○ | 発表日・公開日など |
| `draft` | ○ | `true` = 下書き、`false` = 公開 |
| `tags` | 任意 | 分類用タグ |
| `summary` | 任意 | 一覧表示用の短い要約 |

## ファイル名の例

```
content/publications/
├── _index.md
├── paper-abc-2026.md
└── talk-xyz-conf-2026.md
```

ファイル名（スラッグ）は URL に使われます。英数字とハイフンが無難です。

## 現状

`content/publications/_index.md` のみ存在します。実績を追加するときは上記テンプレートをコピーして新しい `.md` を作成してください。
