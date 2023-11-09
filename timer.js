// DE AICI INCEPE CEASU
let hours = 0;
let minutes = 0;
let seconds = 0;
let Interval;

function start() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
}

function stop() {
  clearInterval(Interval);
}

function reset() {
  clearInterval(Interval);
  hours = "00";
  minutes = "00";
  seconds = "00";
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
}

function startTimer() {
  seconds++;

  if (seconds <= 9) {
    spanSeconds.textContent = "0" + seconds;
  }

  if (seconds > 9) {
    spanSeconds.textContent = seconds;
  }

  if (seconds > 59) {
    minutes++;
    spanMinutes.textContent = "0" + minutes;
    seconds = 0;
    spanSeconds.textContent = "0" + 0;
  }

  if (minutes <= 9 && spanMinutes.textContent.length < 2) {
    spanMinutes.textContent = "0" + minutes;
  }

  if (minutes > 9) {
    spanMinutes.textContent = minutes;
  }
  if (minutes > 59) {
    hours++;
    spanHours.textContent = "0" + hours;
    minutes = 0;
    spanMinutes.textContent = "0" + 0;
  }
}

function createTimer() {
  output.innerHTML = "";

  timerParagraph.appendChild(spanHours);
  timerParagraph.appendChild(colon1);
  timerParagraph.appendChild(spanMinutes);
  timerParagraph.appendChild(colon2);
  timerParagraph.appendChild(spanSeconds);

  output.appendChild(timerParagraph);
  return timerParagraph;
}

const objectForAllF = { startTimer, reset, stop, start, createTimer };
