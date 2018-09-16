var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var yourTopic = require('../setting.json').yourTopic;

var message = 'on';
//var message = 'off';

var topic = yourTopic + '/hw/led'; // '/kagawa/kosen/pi/hw/led'

client.on('connect', function(){
  console.log('publisher.connected.');
  console.log('topic:', topic, ', message:', message);

  client.publish(topic, message);
});

