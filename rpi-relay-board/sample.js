var relay = require('./lib/rpiRelayBoard');

relay.init( function() {
  relay.on(1);
  relay.off(2);
  relay.on(3);
  relay.off(4);
});

