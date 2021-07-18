const etchaSketch = () => {
  const screen = document.querySelector(".screen");

  const displayGrid = (pixels) => {
    // Creates each individual div depending on grid size.
    for (let i = 0; i < pixels ** 2; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.className = `square${i}`;
      grid.style.backgroundColor = "lightgrey";
      screen.appendChild(grid);
    }
    // Creates the grid on Etch-A-Sketch board.
    screen.style.gridTemplateColumns = `repeat(${pixels}, auto)`;
    screen.style.gridTemplateRows = `repeat(${pixels}, auto)`;
  };
  const drawSquares = (pixels) => {
    const rainbowBtn = document.querySelector(".rainbow");
    // Draws on screen.
    for (let i = 0; i < pixels ** 2; i++) {
      const draw = document.querySelector(`.square${i}`);
      draw.addEventListener("mouseover", function (e) {
        draw.style = "background-color: black";
        draw.style = "transition: 0.1s all ease-in";
      });
      // Selects a random number and assigns that number to R/G/B values.
      rainbowBtn.addEventListener("click", (e) => {
        draw.addEventListener("mouseover", (e) => {
          const randomR = Math.floor(Math.random() * 255);
          const randomG = Math.floor(Math.random() * 255);
          const randomB = Math.floor(Math.random() * 255);
          draw.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        });
      });
    }
  };
  const eraseImage = (pixels) => {
    const board = document.querySelector(".container");
    const eraserBtn = document.querySelector(".eraser");
    // Clears board when eraser button clicked.
    eraserBtn.addEventListener("click", (e) => {
      for (let i = 0; i < pixels ** 2; i++) {
        const grid = document.querySelector(`.square${i}`);
        grid.style.backgroundColor = "white";
      }
      // Animates board when erase button clicked
      board.style.animation = "shakeBoard 0.5s ease";
      setTimeout(function () {
        board.style.animation = "";
      }, 500);
    });
  };
  // Gives user option to choose size of board below 100x100.
  const boardSize = () => {
    let x = 0;
    while (x < 1) {
      const canvasSize = prompt(
        "Choose your grid size? (must be 100 or less)."
      );
      if (canvasSize > 100 || isNaN(canvasSize)) {
        continue;
      } else {
        eraseImage(canvasSize);
        displayGrid(canvasSize);
        drawSquares(canvasSize);
        break;
      }
    }
  };
  boardSize();
};
etchaSketch();
