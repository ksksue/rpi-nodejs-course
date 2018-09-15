/////////////////////////////////////////////////////
// slack
/////////////////////////////////////////////////////
const { WebClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const channelId = 'general';

/////////////////////////////////////////////////////
// mqtt
/////////////////////////////////////////////////////

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://kosenpi.local');
var myTopic = require('../setting.json').myTopic;
var myName = require('../setting.json').myName;

const MY_TOPIC_HEAD = myTopic + '/slack';
const MY_TOPIC = MY_TOPIC_HEAD;

client.on('connect', function(){
  console.log('subscriber.connected.');
});

client.subscribe(MY_TOPIC, function(err, granted){
  console.log('subscriber.subscribed.');
});

client.on('message', function(topic, message){
  console.log('subscriber.on.message', 'topic:', topic, 'message:', message.toString());

  // See: https://api.slack.com/methods/chat.postMessage
  web.chat.postMessage({ channel: channelId, text: myName + ' : ' + message.toString() })
    .then((res) => {
      // `res` contains information about the posted message
      console.log('Message sent: ', res.ts);
    })
    .catch(console.error);

});


