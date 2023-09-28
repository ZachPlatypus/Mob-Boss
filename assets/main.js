let cash = 0;
const cashDisplay = document.getElementById("cashDisplay");
const description = document.getElementById("description");
let bodegaCash = 15;
let factoryCash = 80;
let lastRobberyTime = 0;
cashDisplay.textContent = cash;
const buySMG = document.getElementById("gunSMG");
let ownsSMG = false;
const gameContainer = document.getElementsByClassName("game-container");

// Local Storage set up

document.addEventListener('DOMContentLoaded', () => {
    const savedCash = localStorage.getItem('savedCash');
    if (savedCash !== null){
        console.log(savedCash)
        cash = parseInt(savedCash);
        cashDisplay.textContent = cash;
    };

    const savedBodegaMan = localStorage.getItem('savedBodegaMan');
    console.log(savedBodegaMan)
    if (savedBodegaMan === 'true'){
        bodegaManClicked = true;
        setInterval(autoBodega, 5000);
        
    } else {
        showBodegaMan();
    }; 

    const savedSMG = localStorage.getItem('savedSMG');
    console.log(ownsSMG)
    if (savedSMG === 'true'){
        ownsSMG = true;
        gunFactory.style.display = 'inline-block';
        hideSMG();
    };

    const savedFactoryMan = localStorage.getItem('savedFactoryMan');
    console.log(ownsSMG)
    if (savedFactoryMan === 'true'){
        savedFactoryMan = true;
        setInterval(autoFactory, 5000);
        
    } else {
        showFactoryMan();
    };
});

// Updating Cash & Victory Screen

function updateCash(){
    /* if (cash >= 5000){
        gameContainer.style.backgroundImage = "url(./assets/img/CityBGWin.png)"
    } else {*/
        cashDisplay.textContent = cash;
        localStorage.setItem('savedCash', cash);
    //}
};

// Upgrade to an SMG

function hideSMG(){
    buySMG.style.display = 'none';
};

function upgradeSMG(){
    if (cash >= 500){
        if (ownsSMG === false){
        cash -= 500;
        updateCash();
        hideSMG();
        ownsSMG = true;
        gunFactory.style.display = 'inline-block';
        localStorage.setItem('savedSMG', ownsSMG);
        }
    }
};

buySMG.addEventListener("click", upgradeSMG);

buySMG.addEventListener("mouseover", () => {
    description.textContent = `Upgrade to an SMG, allowing you to perform higher level crime. Costs $500.`;
    buySMG.style.cursor = 'pointer';
});
buySMG.addEventListener("mouseout", () => {
    description.textContent = "";
});

// Reset Progress
const clearCashBtn = document.getElementById("clear");
clearCashBtn.addEventListener("click", clearCash);
function clearCash(){
    cash = 0;
    bodegaManClicked = false;
    localStorage.setItem('savedBodegaMan', bodegaManClicked);
    ownsSMG = false;
    localStorage.setItem('savedSMG', ownsSMG);
    factoryManClicked = false;
    localStorage.setItem('savedFactoryMan', factoryManClicked);
    updateCash();
};

// For demonstration purposes
const cashBtn = document.getElementById("cashBtn");
cashBtn.addEventListener("click", getCash);
function getCash(){
    cash += 500;
    updateCash();
}