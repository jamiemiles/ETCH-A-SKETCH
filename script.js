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
    for (let i = 0; i < pixels ** 2; i++) {
      const draw = document.querySelector(`.square${i}`);
      draw.addEventListener("mouseover", function (e) {
        draw.style = "background-color: black";
        console.log(draw);
      });
    }
  };
  const eraseImage = (pixels) => {
    const eraserBtn = document.querySelector(".eraser");
    eraserBtn.addEventListener("click", (e) => {
      for (let i = 0; i < pixels ** 2; i++) {
        const grid = document.querySelector(`.square${i}`);
        grid.style.backgroundColor = "white";
        console.log(eraserBtn);
      }
    });
  };
  eraseImage(canvasSize);
  displayGrid(canvasSize);
  drawSquares(canvasSize);
};
etchaSketch();
