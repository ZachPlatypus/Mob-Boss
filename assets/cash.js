let cash = 0;
const cashDisplay = document.getElementById("cashDisplay")
let insideGuy = 100;
let smgPrice = 250;
let bodegaCash = 20;
cashDisplay.textContent = cash;

bodega.addEventListener("click", () => {
    cash += bodegaCash;
    cashDisplay.textContent = cash;
})

