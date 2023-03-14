const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
  }
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "blue";
  });
});

const numButton = document.querySelector("#numButton");
numButton.addEventListener("click", ()=>{
  const userInput = prompt("Please enetr a number between 0 and 100");
  const userNum = parseInt(userInput);
  if(isNaN(userNum || userNum <= 0 || userNum >= 101){
    alert("Invalid input. Please enter a number between 0 and 100.");
  }else{
    //user the userNum for creating the grid.
  })
})