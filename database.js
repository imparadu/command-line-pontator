const obj = [
  { id: 1, name: "radu", dates: [{ date: "data_curenta", ore: "nr_de_ore" }] },
  {
    id: 2,
    name: "george",
    dates: [{ date: "data_curenta", ore: "nr_de_ore" }],
  },
];


function pontez() {
    lastWord = selectLastWord();
    let tempObj = { date: "azi", ore: "mmmssssssssm" };
    
    obj.find((x) => x.name === lastWord).dates.push(tempObj);
    
    console.log(obj);
    localStorage.setItem("dataBase", JSON.stringify(obj));
}

const dataBase = localStorage.getItem("dataBase");
