var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

var message = 'on';
//var message = 'off';

var topic = 'kagawa/kosen/ksk/led'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

