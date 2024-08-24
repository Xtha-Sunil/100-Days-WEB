let apm = document.querySelector("#am_pm");
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthList = ['Janaury', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
let audio = document.querySelector("#aud");

function setDate() {
  let date = new Date();
  let hh = date.getHours();

  if (hh >= 12) {
    apm.textContent = "PM";
    hh == 12 ? true: hh -= 12;
  } else if (hh <= 12) {
    hh == 0 ? hh = 12: true;
    apm.textContent = "AM"
  }
  document.querySelector("#hh").textContent = hh;
  document.querySelector("#mm").textContent = date.getMinutes();
  document.querySelector("#ss").textContent = date.getSeconds();
  document.querySelector("#day").textContent = dayList[date.getDay()];
  document.querySelector("#date").textContent = date.getDate() + " " + monthList[date.getMonth()]
}
setInterval(setDate, 1000);

//Script for Timer
let start = document.querySelector("#opt1");
let cancel = document.querySelector("#opt2")

let th = document.querySelector("#TW2H");
let tm = document.querySelector("#TW2M");
let ts = document.querySelector("#TW2S");
let w1 = document.querySelector(".tWrapper1");
let w2 = document.querySelector(".tWrapper2");
let tHint = document.querySelector("#tHint");
let timer = document.querySelector(".timer");
let ZZ;

function setTimer(H, M, S) {
  H = parseInt(H) || 0;
  M = parseInt(M) || 0;
  S = parseInt(S) || 0;
  timer.style.borderRadius = "50%"
  w1.classList.add("hidden");
  w2.classList.remove("hidden");
  tHint.textContent = "Timer Started.";
  cancel.disabled = false;
  start.disabled = true;

  secEqv = H*60*60 + M*60 + S;
  secEqv == 0 ? secEqv = 1: true;

  ZZ = setInterval(()=> {
    if (secEqv >= 0) {
      hour = secEqv / 3600 | 0;
      min = ((secEqv - hour * 3600) / 60) | 0;
      sec = secEqv - hour*3600 - min*60;
    } else {
      audio.play();
      cancelTimer("Time Expired.");
    }
    th.textContent = hour;
    tm.textContent = min;
    ts.textContent = sec;
    secEqv -= 1;
  },
    1000);
}

function cancelTimer(str = "Timer Cancelled.") {
  clearInterval(ZZ);
  cancel.disabled = true;
  start.disabled = false;
  timer.style.borderRadius = "15px"
  w1.classList.remove("hidden");
  w2.classList.add("hidden");

  tHint.textContent = str;
  th.textContent = 'H';
  tm.textContent = 'M';
  ts.textContent = 'S';
}

//StopWatch

let intervalId;
let counter = 0;
let arr3 = Array.from(document.querySelector(".display").children);
let phr = pmin = ps = 0;
let arr4 = Array.from(document.querySelector(".stopwatchTimerOptions").children)

function startStopWatch() {
  arr4[0].classList.add("hidden");
  arr4[1].classList.remove("hidden");
  arr4[2].disabled = false;
  arr4[2].classList.remove("hidden");
  arr4[3].classList.add("hidden");

  intervalId = setInterval(() => {
    counter++;
    SWhour = counter / 3600000 | 0;
    SWmin = ((counter - SWhour * 3600000) / 60000) | 0;
    SWsec = (counter - SWhour*3600000 - SWmin*60000)/1000 | 0;
    SWms = counter - SWhour*3600000 - SWmin*60000 - SWsec*1000;

    arr3[0].textContent = SWhour;
    arr3[1].textContent = SWmin;
    arr3[2].textContent = SWsec;
    arr3[3].textContent = SWms;
  },
    1);
}

function stopStopWatch() {
  clearInterval(intervalId);
  arr4[0].classList.remove("hidden");
  arr4[1].classList.add("hidden");
  arr4[2].classList.add("hidden");
  arr4[3].classList.remove("hidden");
}
let display = document.querySelector("#ol");

function resetStopWatch() {
  clearInterval(intervalId);
  arr3[0].textContent = 0;
  arr3[1].textContent = 0;
  arr3[2].textContent = 0;
  arr3[3].textContent = 0;
  counter = 0;
  display.textContent = "";
  arr4[0].classList.remove("hidden");
  arr4[1].classList.add("hidden");
  arr4[2].disabled = true;
  arr4[2].classList.remove("hidden");
  arr4[3].classList.add("hidden");
}

function lapStopWatch() {
  HR = counter / 3600000 | 0;
  MIN = ((counter - SWhour * 3600000) / 60000) | 0;
  SEC = (counter - SWhour*3600000 - SWmin*60000)/1000 | 0;
  MS = counter - SWhour*3600000 - SWmin*60000 - SWsec*1000;

  TIME = HR + ':' + MIN + ':' + SEC + ':' + MS;
  let txt = document.createElement("li");
  txt.innerHTML = TIME;
  display.append(txt)
}

//dual clock
let timerId1, timerId2;
let starter = document.querySelector("#▶");
let stopper = document.querySelector("#⏸");
let clock1 = document.querySelector("#clock1");
let clock2 = document.querySelector("#clock2");
let isTimerSet = false;
let dualTime, timeOfp1, timeOfp2;
let turn = 0

function dualStart() {
  if (!isTimerSet) {
    dualSetting();
    return;
  }
  starter.classList.add("hidden");
  stopper.classList.remove("hidden");
  timeOfp1 = timeOfp2 = parseInt(dualTime*60);
  clock1.addEventListener("click", ()=> {
    clearInterval(timerId1);
    playGame(1);
  })
  clock2.addEventListener("click", ()=> {
    clearInterval(timerId2);
    playGame(0);
  })
  playGame(0);
}
function playGame(turn) {
  if (turn == 0) {
    timerId1 = setInterval(detuctTime, 1000, turn);
    clock1.classList.add("turn");
    clock2.classList.remove("turn");
  } else {
    timerId2 = setInterval(detuctTime, 1000, turn);
    clock1.classList.remove("turn");
    clock2.classList.add("turn");
  }
}

let p1Time = document.querySelector("#p1Time");
let p2Time = document.querySelector("#p2Time");
let showTime = {
  min: 0,
  sec: 0
}
function detuctTime(turn) {
  if (turn == 0) {
    getTime(--timeOfp1);
    p1Time.textContent = showTime.min + ":" + showTime.sec;
  } else {
    getTime(--timeOfp2);
    p2Time.textContent = showTime.min + ":" + showTime.sec;
  }
}
function getTime(val) {
  showTime.min = val/60 | 0;
  showTime.sec = val - showTime.min*60 | 0;
}

function dualStop() {
  clearInterval(timerId1);
  clearInterval(timerId2);
  starter.classList.remove("hidden");
  stopper.classList.add("hidden");
}
function dualSetting() {
  document.querySelector(".dialog").classList.remove("hidden");
}

document.querySelector("form").addEventListener("submit",
  (e)=> {
    e.preventDefault();
    document.querySelector("#player1").textContent = document.querySelector("#p1").value;
    document.querySelector("#player2").textContent = document.querySelector("#p2").value;
    let radio = Array.from(document.querySelectorAll(".input"));
    radio.forEach((elem)=> {
      if (elem.checked == true)
        dualTime = elem.value
    });
    p1Time.textContent = dualTime + ":" + 0;
    p2Time.textContent = dualTime + ":" + 0;
    isTimerSet = true;
    document.querySelector(".dialog").classList.add("hidden");
  });


//hilighter
let nav = document.querySelector("nav");
let arr = Array.from(nav.children);

let project = document.querySelectorAll(".project");
let arr2 = Array.from(project);

arr.forEach((elem)=> {
  elem.addEventListener("click",
    ()=> {
      arr.forEach((item)=> {
        item.classList.remove("active");
        arr2[arr.indexOf(item)].classList.add("hidden");
      });
      elem.classList.add("active");
      arr2[arr.indexOf(elem)].classList.remove("hidden");
    })
})
