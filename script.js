const container = document.createElement("div");
container.className ="grid-container";
document.body.appendChild(container);

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "grid-square";
    container.appendChild(square);
}
 const squares = document.querySelectorAll('.grid-square');
     
     squares.forEach(square => {
     square.addEventListener("mouseenter", () => {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   const randomColor = `rgb(${r}, ${g}, ${b})`;
    square.style.backgroundColor = randomColor;
   });
}); 
   

   const btn = document.createElement("button");
   btn.textContent = "Choose your squares";
   document.body.insertBefore(btn, container);
   btn.className = "grid-button";
   btn.addEventListener("click", () => {
   let squaresPerSide = prompt("Enter number of squares per side(max 100:");
   if (squaresPerSide === null) return;
   squaresPerSide = Number(squaresPerSide);
   if ( squaresPerSide > 100) squaresPerSide = 100;
   createGrid(squaresPerSide);
});
   function createGrid(squaresPerSide) {
    container.innerHTML = "";
    const totalPixels = 640;
    const squareSize = totalPixels / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.className = "grid-square";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener("mouseenter", () => {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   const randomColor = `rgb(${r}, ${g}, ${b})`;
    square.style.backgroundColor = randomColor;
   });
        });
    }
   
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Sketch";
resetBtn.className = "grid-button";
document.body.insertBefore(resetBtn, container);

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(16);
});

const btnContainer = document.createElement("div");
btnContainer.className = "button-container";
document.body.insertBefore(btnContainer, container);
btnContainer.appendChild(btn);
btnContainer.appendChild(resetBtn);

