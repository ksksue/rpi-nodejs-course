const { WebClient } = require('@slack/client');

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
const channelId = 'general';

// See: https://api.slack.com/methods/chat.postMessage
web.chat.postMessage({ channel: channelId, text: 'Hello there' },
  .then((res) => {
    // `res` contains information about the posted message
    console.log('Message sent: ', res.ts);
  })
  .catch(console.error);

