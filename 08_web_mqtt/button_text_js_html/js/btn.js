var count = 0;
document.getElementById("btn").onclick = function() {
  console.log('btn onclick');
  count++;
  document.getElementById("res").innerHTML = "count : " + count;
};

