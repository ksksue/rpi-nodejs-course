var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0');
var led = require('./lib/led');

port.on('data', function (data) {
  console.log('Data:', data.toString());
  if(data == '0') {
    led.off();
  } else if(data == '1') {
    led.on();
  }
});

