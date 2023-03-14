document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  //Populates the grid area with user-decided number of cells
  function createGrid(userNum, container) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${userNum}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userNum}, 1fr)`;
    const root = document.documentElement;
    root.style.setProperty("--num", userNum);
    for (let i = 0; i < userNum; i++) {
      for (let j = 0; j < userNum; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
      }
    }

    //Fills the cells as the mouse eneters each one.
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "blue";
      });
    });
  }

  //Asks the user for the number of cells to fill the grid.
  const numButton = document.querySelector("#numButton");
  numButton.addEventListener("click", () => {
    const userInput = prompt("Please enter a number between 0 and 100");
    const userNum = parseInt(userInput);
    if (isNaN(userNum) || userNum <= 0 || userNum >= 101) {
      alert("Invalid input. Please enter a number between 0 and 100.");
    } else {
      createGrid(userNum, container);
    }
  });
});
