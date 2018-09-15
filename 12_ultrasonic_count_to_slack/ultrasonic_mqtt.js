var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0');
// 改行をデリミタとしてパース
var parser = new SerialPort.parsers.Readline();
port.pipe(parser);

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var myTopic = require('../setting.json').myTopic;

var topic = myTopic + '/slack'

client.on('connect', function(){
  console.log('publisher.connected.');
});

const THRESHOLD_HI = 100;
const THRESHOLD_LO = 30;

const STATE_HI = 0;
const STATE_LO = 1;

var state = STATE_HI;

parser.on('data', function(data) {
  console.log('Data:', data.toString());

  var num = Number(data);
  switch(state) {
    case STATE_HI : 
      if(num < THRESHOLD_LO) {
        state = STATE_LO;
        console.log('近づきました');
        client.publish(topic, '近づきました');
      }
    break;
    case STATE_LO : 
      if(num > THRESHOLD_HI) {
        state = STATE_HI;
        console.log('遠ざかりました');
        client.publish(topic, '遠ざかりました');
      }
    break;
    default :
    break;
  }
});

parser.on('error', function(err) {
  console.error('Error : ', err);
});

