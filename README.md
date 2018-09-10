# rpi-nodejs-course

## 環境
Raspberry Pi 3 Model B+
Seeeduino v4.2
RPi Relay Board

## 開発環境構築
RPiが起動した後の開発環境構築について

nodeの環境をインストールするために、ターミナルで以下コマンド実行

```
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```
```
sudo apt install mosquitto
```


```
sudo vi /etc/mosquitto/mosquitto.conf
```
以下の3行を追記する

```
listener 1883

listener 9090 127.0.0.1
protocol websockets
```


```
sudo systemctl start mosquitto
```

本環境をクローン

```
sudo apt-get install git
git clone git@github.com:ksksue/rpi-nodejs-course.git
```


```
sudo apt-get install ibus-mozc
```
