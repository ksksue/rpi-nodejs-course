var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0');

port.on('data', function (data) {
  console.log('Data:', data.toString());
});

