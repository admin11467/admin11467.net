# content/ ガイド

## 基本方針

| フォルダ | 役割 | 編集頻度 |
|---|---|---|
| `content/` | 記事・ページの本文 | **ここを編集する** |
| `site/` | Hugo 設定・テーマ・レイアウト | デザイン変更時のみ |

`site/hugo.toml` で次のように分離されています:

```toml
contentDir = "../content"
publishDir = "../public"
```

コンテンツはリポジトリ直下の `content/` に置き、Hugo の設定やテーマは `site/` に置く構成です。

## content/ の構成

```
content/
├── _index.md              … トップページ
├── search.md                … 検索ページ
├── blog/
│   ├── _index.md            … ブログ一覧の見出し
│   └── *.md                 … 各記事
└── publications/
    ├── _index.md            … 実績一覧の見出し
    └── *.md                 … 各実績（将来追加）
```

## 各セクション

### トップ（`_index.md`）

サイトの短い紹介文を書きます。front matter は `title` のみで十分です。

### ブログ（`blog/`）

技術メモ・学びのログを置きます。1 記事 = 1 ファイル（`.md`）。

- テンプレート → [blog-template.md](blog-template.md)
- ファイル名は URL の一部になります（例: `my-post.md` → `/blog/my-post/`）

### Publications（`publications/`）

論文・登壇・受賞などの実績を置きます。現時点では `_index.md` のみですが、ブログと同様に `.md` を追加できます。

- テンプレート → [publication-template.md](publication-template.md)

### 検索（`search.md`）

Pagefind 用の固定ページです。通常は編集不要です。

## 新しいファイルの作り方

### 方法 A: テンプレートをコピー（おすすめ）

1. [blog-template.md](blog-template.md) または [publication-template.md](publication-template.md) を開く
2. 内容をコピー
3. `content/blog/` または `content/publications/` に新しい `.md` として保存

### 方法 B: Hugo の archetype を使う

```bash
npx hugo new blog/記事のスラッグ.md --source site
```

`site/archetypes/blog.md` を元にファイルが作られます。

## site/ を触る場面

次のときだけ `site/` を編集します:

- サイト名・メニュー・説明文の変更 → `site/hugo.toml`
- 見た目・レイアウトの変更 → `site/themes/admin11467/`
- 新規記事のデフォルト front matter → `site/archetypes/`

通常の記事執筆では `content/` だけ触れば十分です。
