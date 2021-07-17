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
      const test = document.querySelector(`.square${i}`);
      test.addEventListener("mouseover", function (e) {
        test.style = "background-color: black; height: 32px; width: 32px";
        console.log(test);
      });
    }
  };
  displayGrid();
  drawSquares();
};
etchaSketch();
