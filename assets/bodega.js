// Step 1 of game, rob a bodega!
const bodega = document.querySelector(".bodega")
let bodegaInterval = 1500;

bodega.addEventListener("mouseover", () => {
    description.textContent = `Rob a Bodega, earning you $${bodegaCash}.`;
});
bodega.addEventListener("mouseout", () => {
    description.textContent = "";
});

function robBodega(){
    const currentTime = Date.now();
    const timeSinceLastRobbery = currentTime - lastRobberyTime;
    if (timeSinceLastRobbery >= bodegaInterval){
        cash += bodegaCash;
        cashDisplay.textContent = cash;
        showBodegaMan();
        lastRobberyTime = currentTime;
        }
};

bodega.addEventListener("click", robBodega);

// Hire a guy to hit up the bodega every now and then
const bodegaMan = document.getElementById("bodegaMan");

// Only shows the man when you can afford the $100 for him.
let bodegaManClicked = false;

function showBodegaMan(){
    if (cash >= 100){
        console.log("test1")
        if (bodegaManClicked === false){
            console.log("test2")
            bodegaMan.style.display = 'inline-block';
        }
    } else {
        bodegaMan.style.display = 'none';
    }
};

function hideBodegaMan(){
    bodegaMan.style.display = 'none';
};

// Bodega Man does stuff!
bodegaMan.addEventListener("mouseover", function(){
    description.textContent = `Hire an associate to handle the bodega for you, earning you $${bodegaCash} every ${robberyTime} seconds. Costs $100.`;
});

bodegaMan.addEventListener("mouseout", function(){
    description.textContent = "";
});

function autoBodega(){
    cash += bodegaCash;
    cashDisplay.textContent = cash;
};

bodegaMan.addEventListener("click", () => {
    setInterval(autoBodega, 5000);
    bodegaManClicked = true;
    hideBodegaMan();
    cash -= 100;
    cashDisplay.textContent = cash;
});