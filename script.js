const tilesContainer = document.querySelector(".tilesContainer");
const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
const colorsArray = [...colors, ...colors];
const tileCount = colorsArray.length;

//header complete
const header = document.querySelector("header");
header.textContent = "Game Central";
// console.log(header);

//h1 complete
const h1 = document.createElement("h1"); 
h1.textContent = "Macthing Card Game";
header.appendChild(h1);
h1.style.color = "teal";
// console.log(h1);

//Select main element
const mainEl = document.querySelector("main");
mainEl.style.textAlign = "center";
mainEl.style.margin = "40px";
// console.log(mainEl);

//Select element id for form
const userInput = document.getElementById("nameId");
userInput.setAttribute ("placeholder", "Username");
userInput.style.margin = "10px";
// console.log(userInput);

//Select element id for submit button
const submitBtn = document.getElementById("submitId");
submitBtn.style.margin = "10px";

// const playerName = document.createElement("h3");
// h3.textContent = " ";
// mainEl.appendChild(h3);


const playerName = document.getElementById("playerName");
playerName.style.color = "orange";
submitBtn.addEventListener("click", () => {
    const grabUserName = userInput.value;
    playerName.textContent = grabUserName;
});

console.log(playerName);






