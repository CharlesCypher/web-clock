const h = document.getElementById("hours");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const meridian = document.getElementById("session");

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  const twelve = 12;
  const ten = 10;

  if (hours > twelve) {
    hours = hours - twelve;
    session = "PM";
  }
  if (hours == 0) {
    hours = twelve;
  }

  hours = hours < ten ? "0" + hours : hours;
  minutes = minutes < ten ? "0" + minutes : minutes;
  seconds = seconds < ten ? "0" + seconds : seconds;

  h.textContent = hours;
  m.textContent = minutes;
  s.textContent = seconds;
  meridian.textContent = session;
}

setInterval(getCurrentTime, 1000);

getCurrentTime();
