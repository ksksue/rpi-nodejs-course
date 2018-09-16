# rpi-nodejs-course
本リポジトリは香川高専における講義「現場で役立つ RaspberryPi x Node.js ラピッドIoT開発講座」の講義資料です。

本講義では、現場で役立つ社内ツールやHW治具などを効率よく構築するための知識を身につけます。
本講義を進めることでRPiやNode.js, Arduinoなどを使い少ないコード量でHW/SW/API連携したツールを作ることができます。

本講義の実施時間はハンズオン形式で3時間です。

本講義のスライド
https://docs.google.com/presentation/d/1PP32Yz3fejxk0NyXDop6SpTCkYKwcJA5MPENC-SIads/edit?usp=sharing

本リポジトリの内容は以下の環境を用意することで再現することができます。

## HW環境
Raspberry Pi 3 Model B+

Seeeduino v4.2
https://www.switch-science.com/catalog/2651/

GROVE - 超音波距離センサモジュール
https://www.switch-science.com/catalog/1383/

GROVE - ベースシールド
https://www.switch-science.com/catalog/1293/

LED/抵抗/ブレッドボードなど

## 開発環境構築
RPiが起動した後の開発環境構築について

### Nodejs環境
nodeの環境をインストールするために、ターミナルで以下コマンド実行

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
# npmを最新のnpmに更新
sudo npm install npm -g
```

### mqtt環境
mqttブローカーのインストール
```
sudo apt install mosquitto
```

次に、mqttでwebsocketを有効にする。ブラウザからmqttを使用する場合に必要な設定。

root権限で /etc/mosquitto/mosquitto.conf ファイルを開き、以下の3行を追記する

```
listener 1883

listener 9001
protocol websockets
```

mqttブローカーのサービスをスタート
```
sudo systemctl start mosquitto
```

本コースのブローカーは kosenpi.local に統一されている。自分の環境では localhost などに変更すること。

### Arduino IDE

https://www.arduino.cc/en/Main/Software
このページの「Linux ARM」を選択しダウンロード

### 本コースの環境
本環境をローカルにクローン

```
git clone https://github.com/ksksue/rpi-nodejs-course.git
```
