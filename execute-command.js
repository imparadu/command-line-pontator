function executeCommand() {
    const commandInput = document.getElementById("commandInput");
    const output = document.getElementById("output");
    const command = commandInput.value; //.toLowerCase();
  
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
      // paragraph.innerHTML = list;
      // output.appendChild(paragraph);
      firstWordStyle();
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
      console.log(selectLastWord());
    }
  
    // Clear input after executing the command
    commandInput.value = ``;
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      executeCommand();
    }
  }