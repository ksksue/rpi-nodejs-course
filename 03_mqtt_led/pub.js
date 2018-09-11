var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');

var message = 'on';
//var message = 'off';

var topic = '/kagawa/kosen/ksk/hw/led'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

