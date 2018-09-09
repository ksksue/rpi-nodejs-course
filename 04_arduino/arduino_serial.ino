int state = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  if(state == 0) {
    state = 1;
  } else {
    state = 0;
  }

  Serial.print(state);
  delay(1000);
}

