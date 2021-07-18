const etchaSketch = () => {
  const screen = document.querySelector(".screen");

  //   let canvasSize = prompt("How many pixels? ");
  let canvasSize = 20;
  const displayGrid = (pixels) => {
    for (let i = 0; i < pixels ** 2; i++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      grid.className = `square${i}`;
      grid.style.backgroundColor = "white";
      screen.appendChild(grid);
    }
    screen.style.gridTemplateColumns = `repeat(${pixels}, auto)`;
    screen.style.gridTemplateRows = `repeat(${pixels}, auto)`;
  };
  const drawSquares = (pixels) => {
    const rainbowBtn = document.querySelector(".rainbow");
    for (let i = 0; i < pixels ** 2; i++) {
      const draw = document.querySelector(`.square${i}`);

      draw.addEventListener("mouseover", function (e) {
        draw.style = "background-color: black";
        draw.style = "transition: 0.1s all ease-in";
      });
      rainbowBtn.addEventListener("click", (e) => {
        draw.addEventListener("mouseover", (e) => {
          draw.style.backgroundColor = `rgb(${Math.floor(
            Math.random() * 255
          )}, ${Math.floor(Math.random() * 300)}, ${Math.floor(
            Math.random() * 255
          )})`;
        });
      });
    }
  };
  const eraseImage = (pixels) => {
    const board = document.querySelector(".container");
    const eraserBtn = document.querySelector(".eraser");
    eraserBtn.addEventListener("click", (e) => {
      for (let i = 0; i < pixels ** 2; i++) {
        const grid = document.querySelector(`.square${i}`);
        grid.style.backgroundColor = "white";
        console.log(eraserBtn);
      }
      board.style.animation = "shakeBoard 0.5s ease";
      setTimeout(function () {
        board.style.animation = "";
      }, 500);
    });
  };
  eraseImage(canvasSize);
  displayGrid(canvasSize);
  drawSquares(canvasSize);
};
etchaSketch();
