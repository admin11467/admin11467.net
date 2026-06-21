# Cloudflare Pages の設定

## ダッシュボード設定

**Settings → Build**

| 項目 | 値 |
|------|-----|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `public` |

`hugo` だけでは失敗します（設定は `site/hugo.toml` にあります）。

## wrangler.toml について

Pages プロジェクト用の `wrangler.toml` は次の最小構成です。

```toml
name = "admin11467-net"
pages_build_output_dir = "./public"
```

`[assets]` セクションは **Workers 用**のため、Pages では使えません。

## よくあるエラー

| ログ | 対処 |
|------|------|
| `does not support "assets"` | `wrangler.toml` から `[assets]` を削除 |
| `Unable to locate config file` | Build command を `npm run build` に |
| 404 | ビルド成功後、output が `public` か確認 |
