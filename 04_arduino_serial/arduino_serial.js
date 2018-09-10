var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);

parser.on('data', function(data) {
  console.log('Data:', data.toString());
});

parser.on('error', function(err) {
  console.error('Error : ', err);
});

