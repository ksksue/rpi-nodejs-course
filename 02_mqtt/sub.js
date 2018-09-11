var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');

const TOPIC = '/kagawa/kosen/ksk';

client.on('connect', function(){
  console.log('subscriber.connected.');
});

client.subscribe(TOPIC, function(err, granted){
  console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
  console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

