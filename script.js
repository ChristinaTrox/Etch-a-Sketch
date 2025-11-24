let mode = "rainbow";

const container = document.createElement("div");
container.className ="grid-container";
document.body.appendChild(container);

createGrid(16);

   const btn = document.createElement("button");
   btn.textContent = "Choose your squares";
  
   btn.className = "grid-button";

   btn.addEventListener("click", () => {
   let squaresPerSide = prompt("Enter number of squares per side(max 100:");
   if (squaresPerSide === null) return;
   squaresPerSide = Number(squaresPerSide);
   if ( squaresPerSide > 100) squaresPerSide = 100;
   createGrid(squaresPerSide);
});


const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Sketch";
resetBtn.className = "grid-button";


resetBtn.addEventListener("click", () =>  createGrid(16));


const btnContainer = document.createElement("div");
btnContainer.className = "button-container";
document.body.insertBefore(btnContainer, container);
btnContainer.appendChild(btn);
btnContainer.appendChild(resetBtn);

const toolsDiv = document.querySelector(".tools");
const mainWrapper = document.createElement("div");
mainWrapper.className = "main-wrapper";
document.body.appendChild(mainWrapper);
mainWrapper.appendChild(toolsDiv);
mainWrapper.appendChild(container);



const brushImg = document.querySelector(".brush");
brushImg.addEventListener("click", () => {
    if (mode === "rainbow") mode = "black";
    else if(mode === "black") mode = "erase";
    else mode = "rainbow";

    brushImg.style.transform = "scale(1.1)";
    setTimeout(() => brushImg.style.transform = "scale(1)", 150);
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

        square.addEventListener("mouseenter", ()=> {
    if (mode === "rainbow") {
        const r = Math.floor(Math.random()* 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (mode === "black") {
        square.style.backgroundColor = "black";
    } else if (mode === "erase"){
        square.style.backgroundColor = "#eee";
        }
});

        container.appendChild(square);
    }

    }


 



   




