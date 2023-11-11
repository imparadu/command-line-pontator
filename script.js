const list = [
  // "home - takes you to the home page.",
  // "about - takes you to the about page.",
  "timer - shows timer.",
  "start timer  - starts the timer.",
  "stop timer - stops the timer.",
  "reset timer  - resets the timer.",
  'add timer to "user" - adds the accumulated time and current date to user',
  'show "user" - displays date and time of selected user',
  'change color to "color" - changes the background color(type in your desired color)',
];

let lastWord;
const output = document.getElementById("output");
const paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
paragraph.innerHTML = `type "list" or "help" to see all available commands`;
output.appendChild(paragraph);

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
