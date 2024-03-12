var t;
var thousandths = 0;
var seconds = 0;
var minutes = 0;
var toggle = true;
function initTimer() {
  t = setInterval(showTimer, 10);
}

function pad(n, width, z) {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function showTimer() {
  thousandths++;
  if (thousandths === 99) {
    thousandths = 0;
    seconds++;
  }
  if (seconds === 59) {
    seconds = 0;
    minutes++;
  }
  document.getElementById("thousandths").textContent = pad(thousandths, 2);
  document.getElementById("seconds").textContent = pad(seconds, 2);
  document.getElementById("minutes").textContent = minutes;
}

function start() {
  if (toggle) {
    initTimer();
    toggle = false;
  } else {
    window.clearInterval(t);
    toggle = true;
  }
}

function reset() {
  window.clearInterval(t);
  thousandths = 0;
  seconds = 0;
  minutes = 0;
  document.getElementById("thousandths").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("minutes").textContent = "0";
}
