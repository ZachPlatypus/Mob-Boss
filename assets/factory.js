// Step 1 of game, rob a factory!
const factory = document.querySelector(".factory")
let factoryInterval = 3000;

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
    if (ownsSMG === true){
        if (timeSinceLastRobbery >= factoryInterval){
            cash += factoryCash;
            updateCash();
            lastRobberyTime = currentTime;
            console.log("+$80");
        }
    }
};

factory.addEventListener("click", robFactory);

// Hire a guy to hit up the factory every now and then
const factoryMan = document.getElementById("factoryMan");

// Only shows the man when you can afford the $100 for him.
let factoryManClicked = false;

function showFactoryMan(){
    if (cash >= 1000){
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
    description.textContent = `Hire an associate to handle the factory for you, earning you $${factoryCash} every 5 seconds. Costs $1000.`;
    factoryMan.style.cursor = 'pointer';
});

factoryMan.addEventListener("mouseout", function(){
    description.textContent = "";
});

function autoFactory(){
    cash += factoryCash;
    updateCash();
    showFactoryMan();
    console.log("+$80");
};

factoryMan.addEventListener("click", () => {
    setInterval(autoFactory, 5000);
    factoryManClicked = true;
    hideFactoryMan();
    cash -= 1000;
    updateCash();
    localStorage.setItem('savedFactoryMan', factoryManClicked);
});

