const list =
  "home - takes you to the home page.\nabout - takes you to the about page.\n timer - shows timer?";

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
    output.innerHTML = ''
    paragraph.innerHTML = "Navigating to the home page...\nnot";
    output.appendChild(paragraph);
  } else if (command === "about") {
    output.innerHTML = "Navigating to the about page...";
  } else if (command === "list") {
    output.innerHTML = list;
  } else if (command === "timer") {
    output.appendChild(createTimer());
  } else {
    output.innerHTML = "Command not recognized. Please enter a valid command.";
  }

  // Clear input after executing the command
  commandInput.value = ``;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    executeCommand();
  }
}
// createTimer()
function createTimer() {
    output.innerHTML = ''
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

  timerParagraph.appendChild(spanHours);
  timerParagraph.appendChild(colon1);
  timerParagraph.appendChild(spanMinutes);
  timerParagraph.appendChild(colon2);
  timerParagraph.appendChild(spanSeconds);

  output.appendChild(timerParagraph);
  return timerParagraph;
}
