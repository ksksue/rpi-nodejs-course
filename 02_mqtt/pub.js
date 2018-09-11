var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');

var message = 'Hello MQTT!';
var topic = '/kagawa/kosen/ksk'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

