# Cognito+Lineログインを使用したReactアプリケーションの認証

## プロジェクト概要
このプロジェクトは、CognitoとLineログインを使用してReactアプリケーションで認証を行うためのものです。このREADMEでは、セットアップ手順、環境変数の設定、およびアプリケーションの使用方法について説明します。

## セットアップ手順

### 前提条件
- Node.jsがインストールされていること
- AWSアカウントがあり、Cognitoが設定されていること
- Line Developersアカウントがあり、LINEログインが設定されていること

### 環境変数の設定
まず、プロジェクトルートに `.env` ファイルを作成し、以下の内容を記述してください。この情報はCognitoとLineログインの設定に必要です。

```bash
REACT_APP_COGNITO_USER_POOL_ID=ap-northeast-1_abcdefghi
REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID=1234567890abcdefghijklmnop
REACT_APP_COGNITO_IDENTITY_POOL_ID=ap-northeast-1:40606946-e40e-4791-be4a-b60a4d60628d
REACT_APP_COGNITO_OAUTH_DOMAIN=sample-line-login.auth.ap-northeast-1.amazoncognito.com
REACT_APP_COGNITO_OAUTH_REDIRECT_SIGNIN_URL=http://localhost:3000
REACT_APP_COGNITO_OAUTH_REDIRECT_SIGNOUT_URL=http://localhost:3000
```

### パッケージのインストール
プロジェクトルートで以下のコマンドを実行して、必要なパッケージをインストールしてください。

```bash
npm install
```

### アプリケーションの起動

以下のコマンドを実行して、アプリケーションを起動してください。

```bash
npm start
```