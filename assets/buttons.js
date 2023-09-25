const description = document.getElementById("description")

// Step 1 of game, rob a bodega!
const bodega = document.querySelector(".bodega")
bodega.addEventListener("mouseover", () => {
    description.textContent = `Rob a Bodega, earning you $${bodegaCash}.`;
})
bodega.addEventListener("mouseout", () => {
    description.textContent = "";
})
function robBodega(){
    if (bodegaManClicked = false){
        cash += bodegaCash,
        cashDisplay.textContent = cash,
        showBodegaMan();
    } else {
        cash += bodegaCash,
        cashDisplay.textContent = cash;
    }
}
bodega.addEventListener("click", robBodega);

// Hire a guy to hit up the bodega every now and then
const bodegaMan = document.getElementById("bodegaMan");
let bodegaManClicked = false;

// Only shows the man when you can afford the $100 for him.
function showBodegaMan(){
    if (cash >= 100){
        bodegaMan.style.display = 'inline-block';
    } else {
        bodegaMan.style.display = 'none';
    }
}

function hideBodegaMan(){
    if (bodegaManClicked = true){
        bodegaMan.style.display = 'none';
    }
}

// Bodega Man does stuff!
bodegaMan.addEventListener("mouseover", function(){
    description.textContent = `Hire an associate to handle the bodega for you, earning you $${bodegaCash} every ${robberyTime} seconds.`;
})
bodegaMan.addEventListener("mouseout", function(){
    description.textContent = "";
})

function autoBodega(){
    setInterval(autoBodega, 5000)
    cash += bodegaCash,
    cashDisplay.textContent = cash;
}

bodegaMan.addEventListener("click", () => {
    autoBodega();
    bodegaManClicked = true;
    hideBodegaMan();
    cash -= 100;
    cashDisplay.textContent = cash;
})