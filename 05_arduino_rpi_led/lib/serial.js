var SerialPort = require('serialport');
var util = require('util');
var events = require('events');

function arduinoSerial(portName) {
  if(!(this instanceof arduinoSerial)) {
    return new arduinoSerial(portName);
  }

  this.port = new SerialPort(portName);
  this.parser = new SerialPort.parsers.Readline();
  this.port.pipe(this.parser);

  this.parser.on('data', (data) => {
    this.emit('data', data);
  });

  this.port.on('error', (err) => {
    this.emit('error', err);
  });
}

util.inherits(arduinoSerial, events.EventEmitter);

module.exports = arduinoSerial;

