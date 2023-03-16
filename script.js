document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#container");

  //Populates the grid area with user-decided number of cells
  function createGrid(userNum, container, colorFN = fillCellBlue) {
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
        cell.addEventListener("mouseenter", colorFN);
      }
    }
  }

  //Links rainbow button click to effect.
  const rainbow = document.querySelector("#rainbowButton");
  rainbow.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.removeEventListener("mouseenter", fillCellBlue);
      cell.addEventListener("mouseenter", fillCellRandomColor);
    });
  });

  //Default cell fill colour.
  function fillCellBlue() {
    this.style.backgroundColor = "blue";
  }

  //enables RAINBOW button function
  function fillCellRandomColor() {
    this.style.backgroundColor = getRandomColor();
  }

  //Returns a random hexadecimal color code
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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

  //Links Opacity Button click to effect
  const opacity = document.querySelector("#OpacButton");
  opacity.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.removeEventListener("mouseenter", fillCellBlue);
      cell.addEventListener("mouseenter", increaseOpacityBlack);
    });
  });

  //Increase of Opacity in cells
  function increaseOpacityBlack() {
    let counter = 0;
    const maxCount = 10;
    const increment = 0.1;
    let opacity = 0;

    return function () {
      if (counter < maxCount) {
        counter++;
        opacity += increment;
        this.style.backgroundColor = `rgba(0,0,0,${opacity})`;
      }
    };
  }
});
