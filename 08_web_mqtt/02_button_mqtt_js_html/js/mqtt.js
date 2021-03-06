var myTopic = "/kagawa/kosen/pi";
var yourTopic = "/kagawa/kosen/pi";

// Create a client instance
client = new Paho.MQTT.Client("kosenpi.local", Number(9001), "clientId" + new Date().getTime());

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  client.subscribe(myTopic + "/web");
}

function onMessageArrived(message) {
  console.log(message.payloadString);
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

var count = 0;

document.getElementById("btn_led_on").onclick = function() {
  count++;
  document.getElementById("text1").innerHTML = "count : " + count;
  client.send(yourTopic + "/hw/led", "on");
};

document.getElementById("btn_led_off").onclick = function() {
  count++;
  document.getElementById("text1").innerHTML = "count : " + count;
  client.send(yourTopic + "/hw/led", "off");
};

