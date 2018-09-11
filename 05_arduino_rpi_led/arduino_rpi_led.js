var SerialPort = require('serialport');
var led = require('./lib/led');
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);


parser.on('data', function(data) {
  console.log('Data:', data.toString());
  if(data == '0') {
    led.off();
  } else if(data == '1') {
    led.on();
  }
});

parser.on('error', function(err) {
  console.error('Error : ', err);
});

