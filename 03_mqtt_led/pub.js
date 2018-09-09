var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

//var message = '1';
var message = '0';
var topic = 'kagawa/kosen/KeisukeSuzuki'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

