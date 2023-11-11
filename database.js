// const obj = [
//   { id: 1, name: "radu", dates: [] },
//   {
//     id: 2,
//     name: "george",
//     dates: [],
//   },
// ];
// localStorage.setItem('dataBase', JSON.stringify(obj));
const obj = JSON.parse(localStorage.getItem("dataBase"))

function pontez() {
  stop();
  
  lastWord = selectLastWord();
  let tempObj = { date: localDate, ore: `${spanHours.innerText}:${spanMinutes.innerText}:${spanSeconds.innerText}` };
  
  obj.find((x) => x.name === lastWord).dates.push(tempObj);
  //salveaza "database" in localStorage
  localStorage.setItem("dataBase", JSON.stringify(obj));
}

const dataBase = localStorage.getItem("dataBase");

function returnFormattedDate(){
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
  return formattedDate  
}
let localDate = returnFormattedDate()
// console.log(obj)

