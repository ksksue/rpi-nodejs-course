var gpio = require('rpi-gpio');

const LED_PIN = 40;

function led() {
  // LED ピンをOUT方向に設定
  gpio.setup(LED_PIN, gpio.DIR_OUT, function() {
    // LED ピンをhighに設定
    gpio.write(LED_PIN, true);
  });
}

led.prototype.on = function(callback) {
  gpio.write(LED_PIN, false, callback);
};

led.prototype.off = function(callback) {
  gpio.write(LED_PIN, true, callback);
};

module.exports = new led();

