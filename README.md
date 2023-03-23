# 都道府県別の総人口推移グラフを表示する SPA

https://yumemi-frontend-codecheck-2024grads.vercel.app/

## 工夫した点

- Bulletproof React のディレクトリ構成を参考にした
- 都道府県の人口構成情報をキャッシュし、最初にチェックしたときにしか人口構成情報 API を叩かないようにした
- パフォーマンスの最適化を行った(Lighthouse 100 点)
  ![スクリーンショット 2023-03-24 060042](https://user-images.githubusercontent.com/39045817/227360060-2cd6b700-813e-4596-83de-0edfe22f0e47.png)
  (Chrome のゲストで測定。)
  - バンドルサイズの削減
  - Dynamic Import でコード分割をした。

## 環境構築(API キーの設定)

1. [RESAS API](https://opendata.resas-portal.go.jp/)から API キーを取得
2. `.env`をプロジェクトルートに作成
   → `cp .env.template .env`
3. `VITE_RESAS_API_KEY=YOUR_API_KEY`の`YOUR_API_KEY`の部分に取得した API キーをペースト

## 技術スタック

- Typescript
- React
- Vite
