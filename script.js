const etchaSketch = () => {
  const displayGrid = () => {
    for (let i = 0; i < 16 ** 2; i++) {
      const grid = document.createElement("div");
      const screen = document.querySelector(".screen");
      grid.className = `square${i}`;
      screen.appendChild(grid);
      grid.style = "border: 1px solid black; height: 32px; width: 32px; ";
    }
  };
  const drawSquares = () => {
    for (let i = 0; i < 16 ** 2; i++) {
      const squarePosition = document.querySelectorAll(`.square${i}`);

      squarePosition.forEach(square, function () {
        this.style = "background-color: black";
      });
    }
  };
  displayGrid();
  drawSquares();
};
etchaSketch();
