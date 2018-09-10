# rpi-nodejs-course

## HW環境
Raspberry Pi 3 Model B+

Seeeduino v4.2

RPi Relay Board

## 開発環境構築
RPiが起動した後の開発環境構築について

### Nodejs環境
nodeの環境をインストールするために、ターミナルで以下コマンド実行

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

### mqtt環境
mqttブローカーのインストール
```
sudo apt install mosquitto
```

mqttでwebsocketを有効にする方法。webからmqttを使用する場合に必要な設定。

```
sudo vi /etc/mosquitto/mosquitto.conf
```
以下の3行を追記する

```
listener 1883

listener 9090 127.0.0.1
protocol websockets
```

mqttブローカーのサービスをスタート
```
sudo systemctl start mosquitto
```

### 本コースの環境
本環境をローカルにクローン

```
git clone https://github.com/ksksue/rpi-nodejs-course.git
```

### その他
日本語環境
```
sudo apt-get install ibus-mozc
```
