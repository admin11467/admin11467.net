# Admin11467 サイト ドキュメント

Admin11467.net（Hugo）の運用・執筆向けドキュメントです。

## 目次

| ドキュメント | 内容 |
|---|---|
| [getting-started.md](getting-started.md) | ローカル開発・ビルド・デプロイ |
| [content-guide.md](content-guide.md) | `content/` と `site/` の役割 |
| [blog-template.md](blog-template.md) | ブログ記事のテンプレート（コピペ用） |
| [publication-template.md](publication-template.md) | Publications（実績）のテンプレート |
| [draft.md](draft.md) | 下書きの書き方 |

## ざっくり構成

```
admin11467.net/
├── content/     … 記事・ページ（ここを編集する）
├── site/        … Hugo 設定・テーマ
├── public/      … ビルド出力（自動生成）
├── docs/        … このドキュメント
└── package.json … npm スクリプト
```

## よく使うコマンド

```bash
npm install      # 初回のみ
npm run dev      # ローカルプレビュー
npm run build    # 本番用ビルド
npm run deploy   # Cloudflare へデプロイ
```

詳細は [getting-started.md](getting-started.md) を参照してください。
