var SerialPort = require('serialport');
var led = require('./lib/led');
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var yourTopic = require('../setting.json').yourTopic;

var LED_TOPIC = yourTopic + '/hw/led';

client.on('connect', function(){
  console.log('publisher.connected.');
});

const THRESHOLD_HI = 100;
const THRESHOLD_LO = 30;

parser.on('data', function(data) {
  console.log('Data:', data.toString());

  var num = Number(data);
  if(num < THRESHOLD_LO) {
    client.publish(LED_TOPIC, 'on');
  } else if(num > THRESHOLD_HI) {
    client.publish(LED_TOPIC, 'off');
  }
});

parser.on('error', function(err) {
  console.error('Error : ', err);
});

