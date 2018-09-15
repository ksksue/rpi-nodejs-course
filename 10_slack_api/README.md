## SlackのToken取得方法

slackに登録、ワークスペースを作ったあとから

https://api.slack.com/
へアクセス

画面中央の StartBuilding をクリック

* AppName : アプリの名前(この名前でリストされる)
* Development Slack Workspace : 連携したいワークスペースを選択

CreateApp をクリック

Add features and functionality で Bots を選択

Add a Bot User をクリック

Display Name/Default User Name (Slack上で表示される名前)を入力し、Add Bot User をクリック

左タブのBasic Information をクリック

Install your app to your workspace をクリック

Install App to Workspace ボタンをクリック

許可するをクリック

Manage distribution をクリック

Distribute Appをクリック

Add OAuth Redirect URLs をクリック

Set Up Redirect URLs ボタンをクリック

そこに現れた Bot User OAuth Access Token の内容をコピー

ターミナル上で以下コマンドを実行

export SLACK_TOKEN=[コピーしたToken内容]


