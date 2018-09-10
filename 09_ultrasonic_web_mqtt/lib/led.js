var gpio = require('rpi-gpio');

const LED_PIN = 40;

function led() {
  this.inited = false;
  // LED ピンをOUT方向に設定
  gpio.setup(LED_PIN, gpio.DIR_OUT, () => {
    this.inited = true;
  });
}

led.prototype.on = function(callback) {
  if(this.inited) {
    gpio.write(LED_PIN, false, callback);
  }
};

led.prototype.off = function(callback) {
  if(this.inited) {
    gpio.write(LED_PIN, true, callback);
  }
};

module.exports = new led();

