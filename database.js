const obj = [
  { id: 1, name: "radu", dates: [{ date: "data_curenta", ore: "nr_de_ore" }] },
  {
    id: 2,
    name: "george",
    dates: [{ date: "data_curenta", ore: "nr_de_ore" }],
  },
];

localStorage.setItem("dataBase", JSON.stringify(obj));

let tempName = ''
tempName = 'george'
let tempObj = { date: "azi", ore: "mmmm" };

for (let i = 0; i < obj.length; i++) {
  if (obj[i].name === tempName) {
    obj[i].dates.push(tempObj);
  } else if (obj[i].name === "radu") {
    // console.log("second");
  }
}

console.log(obj)

const dataBase = localStorage.getItem("dataBase");
