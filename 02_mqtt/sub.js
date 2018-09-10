var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');

const TOPIC = '/kagawa/kosen/KeisukeSuzuki';

client.on('connect', function(){
  console.log('subscriber.connected.');
});

client.subscribe(TOPIC, function(err, granted){
  console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
  console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());
});

