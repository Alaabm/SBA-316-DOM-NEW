const tileContainer = document.querySelector("tileContainer");
const tiles = document.querySelectorAll("tile");
const allColorOptions = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown"];
// console.log(allColorOptions);
const colorsArray = [...allColorOptions, ...allColorOptions];
// console.log(colorsArray);
const tileCount = colorsArray.length;
// console.log(tileCount);

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


const playerName = document.getElementById("playerName");
playerName.style.color = "orange";
submitBtn.addEventListener("click", () => {
    const grabUserName = userInput.value;
    playerName.textContent = grabUserName;
});












// resetBtn.addEventListener("click", () => {
    
// // });

// const tileCollection = document.querySelectorAll ("tile");
// tileCollection.forEach((tiles) => {
//     tiles.style.backgroundColor = "black";
// })





    // console.log(divCollection);
// function buildTile (color) {
//     const divEl = document.createElement("div");
//     divEl.classList.add("tile");
//     divEl.setAttribute("data-color", color);
// }







// tiles.addEventListener("onClick", () => {
   
//         evt.target.classList.toggle("one");
// });

// for (let i = 0; i < tiles.length; i++) {
//     tiles[i].addEventListener("click", () => {
//         tiles[i].classList.toggle(allColorOptions[i]);
//     });
// };







