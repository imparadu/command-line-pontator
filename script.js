const list =
  `home - takes you to the home page.\nabout - takes you to the about page.\n timer - shows timer.\ntimer start - starts the timer.\ntimer stop - stops the timer.\ntimer reset - resets the timer.\nchange color to "color" (type in your desired color)` ;

const output = document.getElementById("output");
const paragraph = document.createElement("p");
paragraph.innerHTML = "type list to see all available commands";
output.appendChild(paragraph);

function executeCommand() {
  const commandInput = document.getElementById("commandInput");
  const output = document.getElementById("output");
  const command = commandInput.value.toLowerCase();

  // Check different commands
  if (command === "home") {
    output.innerHTML = "";
    paragraph.innerHTML = "Navigating to the home page...\nnot";
    output.appendChild(paragraph);
  } else if (command === "about") {
    output.innerHTML = "";
    paragraph.innerHTML = "Navigating to the about page...";
    output.appendChild(paragraph);
  } else if (command === "list") {
    output.innerHTML = "";
    paragraph.innerHTML = list;
    output.appendChild(paragraph);
  } else if (command === "timer") {
    output.appendChild(createTimer());
  } else if (command === "timer start") {
    output.appendChild(createTimer());
    start();
  } else if (command === "timer stop") {
    output.appendChild(createTimer());
    stop();
  } else if (command === "timer reset") {
    output.appendChild(createTimer());
    reset();
  } else if (command === `change color to ${selectLastWord()}`) {
    console.log(selectLastWord());
    changeColor(selectLastWord());
  } else {
    output.innerHTML = "";
    paragraph.innerHTML = `Unknown command. Please refer to the command list. Type "list" to see available commands.`;
    output.appendChild(paragraph);
    // changeColor(selectLastWord());
  }

  // Clear input after executing the command
  commandInput.value = ``;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    executeCommand();
  }
}

const timerParagraph = document.createElement("p");
timerParagraph.setAttribute("id", "timer");

const spanHours = document.createElement("span");
spanHours.setAttribute("id", "hours");
spanHours.textContent = "00";

const spanMinutes = document.createElement("span");
spanMinutes.setAttribute("id", "minutes");
spanMinutes.textContent = "00";

const spanSeconds = document.createElement("span");
spanSeconds.setAttribute("id", "seconds");
spanSeconds.textContent = "00";

const colon1 = document.createTextNode(":");
const colon2 = document.createTextNode(":");
// createTimer()
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

function changeColor(getBackgroundColor) {
  var element = document.querySelector("body");

  element.style.backgroundColor = getBackgroundColor;
}

function selectLastWord() {
  const inputText = document.getElementById("commandInput").value;

  // Split the input value by spaces to get an array of words
  const words = inputText.split(" ");

  // Get the last word
  const lastWord = words[words.length - 1];

  // Set the selection range in the input field
  const inputElement = document.getElementById("commandInput");
  inputElement.setSelectionRange(
    inputText.lastIndexOf(lastWord),
    inputText.length
  );
  return lastWord;
}

let getBackgroundColor = selectLastWord();
