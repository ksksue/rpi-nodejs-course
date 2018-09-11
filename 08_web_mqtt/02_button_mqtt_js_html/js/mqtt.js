// Create a client instance
//client = new Paho.MQTT.Client("192.168.1.11", Number(9090), "clientId" + new Date().getTime());
client = new Paho.MQTT.Client("localhost", Number(9090), "clientId" + new Date().getTime());

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  client.subscribe("/kagawa/kosen/ksk/web");
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
  client.send("/kagawa/kosen/ksk/hw/led", "on");
};

document.getElementById("btn_led_off").onclick = function() {
  count++;
  document.getElementById("text1").innerHTML = "count : " + count;
  client.send("/kagawa/kosen/ksk/hw/led", "off");
};

