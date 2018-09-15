var SerialPort = require('serialport');
var led = require('./lib/led');
// シリアルポートの設定
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);

// 距離センサしきい値
const THRESHOLD_HI = 100;
const THRESHOLD_LO = 30;

// シリアル通信受信時のイベント
parser.on('data', function(data) {
  console.log('Data:', data.toString());

  var num = Number(data);
  if(num < THRESHOLD_LO) {
    led.on();
  } else if(num > THRESHOLD_HI) {
    led.off();
  }
});

// シリアル通信エラー時のイベント
parser.on('error', function(err) {
  console.error('Error : ', err);
});

