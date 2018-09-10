document.getElementById("btn").onclick = function() {
  console.log('btn onclick');
  document.getElementById("res").innerHTML = "hogehoge";
  client.publish("/kagawa/kosen/ksk/led", "on");
};

