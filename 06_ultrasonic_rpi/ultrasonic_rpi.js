var SerialPort = require('serialport');
var led = require('./lib/led');
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);

const THRESHOLD_HI = 100;
const THRESHOLD_LO = 30;

parser.on('data', function(data) {
  console.log('Data:', data.toString());

  var num = Number(data);
  if(num < THRESHOLD_LO) {
    led.on();
  } else if(num > THRESHOLD_HI) {
    led.off();
  }
});

parser.on('error', function(err) {
  console.error('Error : ', err);
});
