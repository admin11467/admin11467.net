# Admin11467.net

学生開発者 Admin11467 の個人サイト（Hugo + Cloudflare Workers）。

- 本番: https://admin11467.net/

## ドキュメント

運用・執筆の手順は **[docs/](docs/README.md)** にまとめています。

| 内容 | リンク |
|---|---|
| 開発・ビルド・デプロイ | [docs/getting-started.md](docs/getting-started.md) |
| content/ の説明 | [docs/content-guide.md](docs/content-guide.md) |
| ブログ記事テンプレート | [docs/blog-template.md](docs/blog-template.md) |
| Publications テンプレート | [docs/publication-template.md](docs/publication-template.md) |
| 下書き | [docs/draft.md](docs/draft.md) |

## クイックスタート

```bash
npm install
npm run dev      # http://localhost:1313/
npm run build    # public/ を生成
npm run deploy   # Cloudflare へデプロイ
```

## 構成

```
content/   … 記事・ページ
site/      … Hugo 設定・テーマ
public/    … ビルド出力
docs/      … ドキュメント
```
