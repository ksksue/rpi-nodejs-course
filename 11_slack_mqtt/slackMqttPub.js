var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var yourTopic = require('../setting.json').yourTopic;

const message = 'Hello MQTT!';
const topic = yourTopic + '/slack'

client.on('connect', function(){
  console.log('publisher.connected.');

  client.publish(topic, message);
  console.log('topic:', topic, ', message:', message);
});

