# はじめに — 開発・ビルド・デプロイ

## 前提

- [Node.js](https://nodejs.org/)（npm 付き）
- このリポジトリを clone 済みであること

Hugo 本体は `npm install` で `hugo-extended` として入ります。別途 Hugo をインストールする必要はありません。

## 初回セットアップ

```bash
npm install
```

## ローカル開発

```bash
npm run dev
```

ブラウザで **http://localhost:1313/** を開きます。

- 記事を保存すると自動で反映されます
- `draft: true` の下書きもプレビューに表示されます

停止するときはターミナルで `Ctrl + C` です。

## 本番ビルド

```bash
npm run build
```

実行内容:

1. Hugo が `public/` に静的サイトを生成
2. Pagefind が検索インデックスを作成

`public/` は Git に含めない想定です（ビルドのたびに再生成されます）。

## デプロイ

```bash
npm run build
npm run deploy
```

`wrangler deploy` で Cloudflare Workers に `public/` の内容を公開します。

初回は Cloudflare アカウントへのログインが必要な場合があります:

```bash
npx wrangler login
```

## トラブル時

| 症状 | 対処 |
|---|---|
| `hugo` が見つからない | リポジトリ直下で `npm install` したか確認 |
| 記事が一覧に出ない | front matter の `draft: false` になっているか確認 |
| 変更が反映されない | `npm run dev` を再起動 |

## 次に読むもの

- 記事の置き場所 → [content-guide.md](content-guide.md)
- ブログの書き方 → [blog-template.md](blog-template.md)
- 下書き → [draft.md](draft.md)
