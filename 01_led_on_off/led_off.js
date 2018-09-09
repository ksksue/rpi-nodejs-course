var gpio = require('rpi-gpio');

const LED_PIN = 40;

// LED ピンをOUT方向に設定
gpio.setup(LED_PIN, gpio.DIR_OUT, function() {
  // LED ピンをhighに設定
  gpio.write(LED_PIN, true);
});


