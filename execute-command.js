function executeCommand() {
  const commandInput = document.getElementById("commandInput");
  const command = commandInput.value; //.toLowerCase();
  lastWord = selectLastWord();

  // Check different commands
  if (command === "home") {
    output.innerHTML = "";
    paragraph.innerHTML = "Navigating to the home page...\nnot";
    output.appendChild(paragraph);
  } else if (command === "about") {
    output.innerHTML = "";
    paragraph.innerHTML = "Navigating to the about page...";
    output.appendChild(paragraph);
  } else if (command === "list" || command === "help") {
    output.innerHTML = "";

    firstWordStyle();
  } else if (command === "timer") {
    output.appendChild(createTimer());
  } else if (command === "timer start" && command === "start timer") {
    output.appendChild(createTimer());
    start();
  } else if (command === "timer stop" && command === "stop timer") {
    output.appendChild(createTimer());
    stop();
  } else if (command === "timer reset" && command === "reset timer") {
    output.appendChild(createTimer());
    reset();
  } else if (command === `change color to ${lastWord}`) {
    changeColor(lastWord);
  } else if (command === `add timer to ${lastWord}`) {
    pontez(lastWord);
  } else if (command === `show ${lastWord}`) {
    show(lastWord);
  } else {
    output.innerHTML = "";
    paragraph.innerHTML = `Unknown command. Please refer to the command list. Type "list" to see available commands.`;
    output.appendChild(paragraph);
    selectLastWord();
  }

  // Clear input after executing the command
  commandInput.value = ``;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    executeCommand();
  }
}
