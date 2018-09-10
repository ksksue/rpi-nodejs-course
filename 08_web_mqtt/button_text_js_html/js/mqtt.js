// Create a client instance
client = new Paho.MQTT.Client('raspberrypi.local', Number(8080), "clientId");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});

