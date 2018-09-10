var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');
var led = require('./lib/led');

const MY_TOPIC = '/kagawa/kosen/ksk/+';

client.on('connect', function(){
  console.log('subscriber.connected.');
});

client.subscribe(MY_TOPIC, function(err, granted){
  console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
  console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());

  if(message == 'on') {
    console.log('led on');
    led.on();
  } else if(message == 'off') {
    console.log('led off');
    led.off();
  }

});

