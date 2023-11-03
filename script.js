const list = "home - takes you to the home page.\nabout - takes you to the about page."

const clock = '00:00:00'

function executeCommand() {
    const commandInput = document.getElementById('commandInput');
    const output = document.getElementById('output');
    const command = commandInput.value.toLowerCase();

    // Check different commands
    if (command === 'home') {
        output.innerHTML = 'Navigating to the home page...\nnot';
    } else if (command === 'about') {
        output.innerHTML = 'Navigating to the about page...';
    } else if (command === 'list') {
        output.innerHTML = list;
    } else if (command === 'clock') {
        output.innerHTML = clock;
    }
     else {
        output.innerHTML = 'Command not recognized. Please enter a valid command.';
    }

    // Clear input after executing the command
    commandInput.value = ``;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        executeCommand();
    }
}