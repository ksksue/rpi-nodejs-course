// Create a client instance
//client = new Paho.MQTT.Client("raspberrypi.local", Number(8080), "clientId" + new Date().getTime());
client = new Paho.MQTT.Client("localhost", Number(9090), "clientId" + new Date().getTime());

console.log(client);

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
document.getElementById("btn").onclick = function() {
  console.log('btn onclick');
  count++;
  document.getElementById("res").innerHTML = "count : " + count;
  client.send("/kagawa/kosen/ksk/led", "on");
};

