var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var yourTopic = require('../setting.json').yourTopic;

var message = 'Hello MQTT!';
var topic = yourTopic + '/slack'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

