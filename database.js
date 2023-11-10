const obj = [
  { id: 1, name: "radu", dates: [{ date: "data_curenta", ore: "nr_de_ore" }] },
  {
    id: 2,
    name: "george",
    dates: [{ date: "data_curenta", ore: "nr_de_ore" }],
  },
];

function pontez() {
  stop();

  lastWord = selectLastWord();
  let tempObj = { date: formattedDate, ore: `${spanHours.innerText}:${spanMinutes.innerText}:${spanSeconds.innerText}` };

  obj.find((x) => x.name === lastWord).dates.push(tempObj);

  console.log(obj);
  localStorage.setItem("dataBase", JSON.stringify(obj));
}

const dataBase = localStorage.getItem("dataBase");

var currentDate = new Date();

var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Note: Months are zero-based
var day = currentDate.getDate();

var formattedDate =
  year +
  "-" +
  (month < 10 ? "0" : "") +
  month +
  "-" +
  (day < 10 ? "0" : "") +
  day;
