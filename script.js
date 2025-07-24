let display = document.getElementById("display");

let startBtn = document.getElementById("Start");
let stopBtn = document.getElementById("Stop");
let resetBtn = document.getElementById("Reset");

let timerId = null;

startBtn.addEventListener("click", function () {
  if (timerId != null) {
    clearInterval(timerId);
  }
  timerId = setInterval(start, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(timerId);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timerId);
  msec = sec = min = hr = 0;
  display.innerText = `00:00:00:00`;
});

let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;

function start() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        hr++;
      }
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;
  let hrString = hr < 10 ? `0${hr}` : hr;

  display.innerText = `${hrString}:${minString}:${secString}:${msecString}`;
}
