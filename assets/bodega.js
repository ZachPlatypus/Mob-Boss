// Step 1 of game, rob a bodega!
const bodega = document.querySelector(".bodega")
let bodegaInterval = 1500;

bodega.addEventListener("mouseover", () => {
    description.textContent = `Rob a Bodega, earning you $${bodegaCash}.`;
    bodega.style.cursor = 'pointer';
});
bodega.addEventListener("mouseout", () => {
    description.textContent = "";
});

function robBodega(){
    const currentTime = Date.now();
    const timeSinceLastRobbery = currentTime - lastRobberyTime;
    if (timeSinceLastRobbery >= bodegaInterval){
        cash += bodegaCash;
        updateCash();
        lastRobberyTime = currentTime;
        console.log("+$15");
        }
};

bodega.addEventListener("click", robBodega);

// Hire a guy to hit up the bodega every now and then
const bodegaMan = document.getElementById("bodegaMan");

// Only shows the man when you can afford the $100 for him.
let bodegaManClicked = false;

function showBodegaMan(){
    if (cash >= 100){
        if (bodegaManClicked === false){
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
bodegaMan.addEventListener("mouseover", () => {
    description.textContent = `Hire an associate to handle the bodega for you, earning you $${bodegaCash} every 3 seconds. Costs $100.`;
    bodegaMan.style.cursor = 'pointer';
});

bodegaMan.addEventListener("mouseout", () => {
    description.textContent = "";
});

function autoBodega(){
    cash += bodegaCash;
    updateCash();
    showFactoryMan();
    console.log("+$15");
};

bodegaMan.addEventListener("click", () => {
    setInterval(autoBodega, 3000);
    bodegaManClicked = true;
    hideBodegaMan();
    cash -= 100;
    updateCash();
    localStorage.setItem('savedBodegaMan', bodegaManClicked);
});