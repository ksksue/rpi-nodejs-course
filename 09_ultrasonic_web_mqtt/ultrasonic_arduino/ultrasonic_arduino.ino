// http://wiki.seeedstudio.com/Grove-Ultrasonic_Ranger/
#include "Ultrasonic.h"

Ultrasonic ultrasonic(7);

void setup() {
  Serial.begin(9600);
}

void loop() {
  long RangeInCentimeters;

  RangeInCentimeters = ultrasonic.MeasureInCentimeters(); // two measurements should keep an interval
  Serial.println(RangeInCentimeters); // 0~400cm

  delay(300);
}
