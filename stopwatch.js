var x = 0;
var i;
var time = 0;
var millisec = 0;
var reset = 0;
var startstop = 0;
var pause = 0;
var num1 = window.prompt("Enter time in milliseconds" + num1);
num1 = +num1;

function startStop() {
  startstop = startstop + 1;
  a = time;
  if (a === 0) {
    resetWatch();
    start();
  } else if (startstop === 1 && x == 0) {
    start();
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
  }
}

function pauseWatch() {
  pause = pause + 1;
  if (pause === 1) {
    stop();
    document.getElementById("pause").innerHTML = "pause";
    pause = 0;
    startstop = 0;
  }
  x = 0;
}

function start() {
  x = setInterval(timer, 10);
}

function stop() {
  clearInterval(x);
}

var milisec = 0;
var sec = 0;
var min = 0;
var hour = 0;

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

function timer() {
  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  time = ++time;

  if (time / 100 == num1 + 0.01) {
    console.log("success");
    stop();
    time = 0;
  }
  console.log(millisec);
  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function resetWatch() {
  reset = reset + 1;
  if (reset == 1) {
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    pauseWatch();
    reset = 0;
  }
  time = 0;
  x = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";
}
