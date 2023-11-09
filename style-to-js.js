function changeColor(getBackgroundColor) {
  var element = document.querySelector("body");
  element.style.backgroundColor = lastWord;
  console.log(output)
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

function random() {
    lastWord = selectLastWord();
    if (lastWord === "george") {
        //   tempName === "george";
          console.log("yeyey");
        } else if (lastWord === "radu") {
          tempName === "radu";
        }
}


function firstWordStyle() {
  const ul = document.createElement("ul");
  output.appendChild(ul);
  list.forEach((el) => {
    const firstSpan = document.createElement("span");
    firstSpan.setAttribute("class", "highlightedWords");
    const secondSpan = document.createElement("span");

    const strings = el.split(" - ");
    const firstString = strings[0];
    const secondString = ` - ${strings[1]}`;

    firstSpan.textContent = firstString;
    secondSpan.textContent = secondString;
    console.log(typeof firstElements);
    const li = document.createElement("li");

    ul.appendChild(li);
    li.appendChild(firstSpan);
    li.appendChild(secondSpan);
  });
}



// console.log(lastWord)
