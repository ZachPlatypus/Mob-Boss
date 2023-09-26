/* // Step 1 of game, rob a factory!
const factory = document.querySelector(".factory")
let factoryInterval = 1500;

factory.addEventListener("mouseover", () => {
    description.textContent = `Rob a Factory, earning you $${factoryCash}.`;
    factory.style.cursor = 'pointer';
});
factory.addEventListener("mouseout", () => {
    description.textContent = "";
});

function robFactory(){
    const currentTime = Date.now();
    const timeSinceLastRobbery = currentTime - lastRobberyTime;
    if (timeSinceLastRobbery >= factoryInterval){
        cash += factoryCash;
        updateCash();
        showFactoryMan();
        lastRobberyTime = currentTime;
        }
};

factory.addEventListener("click", robFactory);

// Hire a guy to hit up the factory every now and then
const factoryMan = document.getElementById("factoryMan");

// Only shows the man when you can afford the $100 for him.
let factoryManClicked = false;

function showFactoryMan(){
    if (cash >= 100){
        if (factoryManClicked === false){
            factoryMan.style.display = 'inline-block';
        }
    } else {
        factoryMan.style.display = 'none';
    }
};

function hideFactoryMan(){
    factoryMan.style.display = 'none';
};

// Factory Man does stuff!
factoryMan.addEventListener("mouseover", function(){
    description.textContent = `Hire an associate to handle the factory for you, earning you $${factoryCash} every ${robberyTime} seconds. Costs $100.`;
    factoryMan.style.cursor = 'pointer';
});

factoryMan.addEventListener("mouseout", function(){
    description.textContent = "";
});

function autoFactory(){
    cash += factoryCash;
    updateCash();
};

factoryMan.addEventListener("click", () => {
    setInterval(autoFactory, 5000);
    factoryManClicked = true;
    hideFactoryMan();
    cash -= 100;
    updateCash();
});*/