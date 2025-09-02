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
     square.style.backgroundColor = "black";
}); 
  });  

   const btn = document.createElement("button");
   btn.textContent = "New Grid";
   document.body.insertBefore(btn, container);
   btn.className = "grid-button";
   


