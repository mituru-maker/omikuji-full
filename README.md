# おみくじアプリ (Omikuji App)

フルスタックWebアプリケーション - FastAPIバックエンドとHTML/CSS/JavaScriptフロントエンド

## 機能

- 🎌 日本のおみくじを引けるWebアプリ
- 🍀 ラッキーアイテムの表示
- 💬 一言アドバイスの提供
- 🎨 モダンなUIデザイン

## 技術スタック

### バックエンド
- FastAPI
- Python
- uvicorn

### フロントエンド
- HTML5
- CSS3 (モダンデザイン)
- JavaScript (fetch API)

## セットアップ

### バックエンド
```bash
cd backend
python -m venv .venv
.venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### フロントエンド
ブラウザで `http://localhost:8000` を開く

## APIエンドポイント

- `GET /` - サーバー状態確認
- `GET /omikuji` - おみくじを引く
- `GET /check?name={name}` - テスト用エンドポイント

## プロジェクト構成

```
fullstazk/
├── backend/
│   ├── .venv/           # 仮想環境 (Gitで無視)
│   ├── main.py          # FastAPIアプリケーション
│   └── requirements.txt # Python依存関係
├── frontend/
│   ├── index.html       # メインページ
│   └── script.js        # フロントエンドロジック
├── .gitignore           # Git無視ファイル
└── README.md           # プロジェクト説明
```

## 使い方

1. バックエンドサーバーを起動
2. ブラウザで `http://localhost:8000` にアクセス
3. 「おみくじを引く」ボタンをクリック
4. 運勢、ラッキーアイテム、アドバイスを確認

## ライセンス

MIT License
