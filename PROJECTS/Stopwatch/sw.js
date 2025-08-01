let display = document.querySelector('.timerDisplay')
let startBtn = document.getElementById('startBtn')
let stopBtn = document.getElementById('stopBtn')
let resetBtn = document.getElementById('resetBtn')

let msec = 0o0;
let secs = 0o0;
let mins = 0o0;
let timerId = null;

startBtn.addEventListener('click', function(){
  console.log('start clicked');
  if (timerId !== null){
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10)
});

stopBtn.addEventListener('click', function() {
  clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
  clearInterval(timerId);
  display.innerHTML = `00 : 00 : 00`;
  msec = secs = mins = 0o0;
});

function startTimer(){
  msec++;
  if (msec == 100){
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec;
  let secsString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  display.innerHTML = `${minsString} : ${secsString} : ${msecString}`

  // let msecString;
  // if(msec < 10){
  //   msecString = `0${msec}`
  // }else{
  //   msecString = msec
  // }

}