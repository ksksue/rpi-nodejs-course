var relay = require('./lib/rpiRelayBoard');

var c = 1;

function state() {
  if(c < 5) {
    relay.on(c, ()=>{
      c++;
    });
  } else {
    relay.off(c-4, ()=>{
      if(c > 7) { c = 0; }
      c++;
    });

  }
}

setInterval(state, 1000);

