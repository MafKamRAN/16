function updateClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const hour = document.getElementById("hours");
  const minute = document.getElementById("minutes");
  const second = document.getElementById("seconds");
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}
setInterval(updateClock, 1000);
