var gpio = require('rpi-gpio');

const CH1_PIN = 35;
const CH2_PIN = 37;
const CH3_PIN = 38;
const CH4_PIN = 40;

function rpiRelayBoard() {
  if(!(this instanceof rpiRelayBoard)) {
    return new rpiRelayBoard();
  }

  this.inited = false;

}

rpiRelayBoard.prototype.init = function(callback) {
  if(this.inited) { setImmediate(callback); return; }
  this.inited = true;
  gpio.setup(CH1_PIN, gpio.DIR_OUT, () => {
  gpio.write(CH1_PIN, true, () => {
    gpio.setup(CH2_PIN, gpio.DIR_OUT, () => {
    gpio.write(CH2_PIN, true, () => {
      gpio.setup(CH3_PIN, gpio.DIR_OUT, () => {
      gpio.write(CH3_PIN, true, () => {
        gpio.setup(CH4_PIN, gpio.DIR_OUT, () => {
        gpio.write(CH4_PIN, true, () => {
          callback();
        });
        });
      });
      });
    });
    });
  });
  });
 
}

rpiRelayBoard.prototype.on = function(ch, callback) {
  switch(ch) {
    case 1:
      gpio.write(CH1_PIN, false, callback);
    break;
    case 2:
      gpio.write(CH2_PIN, false, callback);
    break;
    case 3:
      gpio.write(CH3_PIN, false, callback);
    break;
    case 4:
      gpio.write(CH4_PIN, false, callback);
    break;
    default:
    break;
  }
};

rpiRelayBoard.prototype.off = function(ch, callback) {
  switch(ch) {
    case 1:
      gpio.write(CH1_PIN, true, callback);
    break;
    case 2:
      gpio.write(CH2_PIN, true, callback);
    break;
    case 3:
      gpio.write(CH3_PIN, true, callback);
    break;
    case 4:
      gpio.write(CH4_PIN, true, callback);
    break;
    default:
    break;
  }
};

module.exports = new rpiRelayBoard();

