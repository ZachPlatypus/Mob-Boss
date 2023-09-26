let cash = 0;
const cashDisplay = document.getElementById("cashDisplay");
const description = document.getElementById("description");
let bodegaCash = 15;
let robberyTime = 5;
let lastRobberyTime = 0;
cashDisplay.textContent = cash;
const buySMG = document.getElementById("gunSMG");
let ownsSMG = false;

// Local Storage set up
localStorage.setItem('savedBodegaMan', bodegaManClicked);
localStorage.setItem('savedSMG', ownsSMG);

document.addEventListener('DOMContentLoaded', () => {
    const savedCash = localStorage.getItem('savedCash');
    if (savedCash !== null){
        console.log(savedCash)
        cash = parseInt(savedCash);
        cashDisplay.textContent = cash;
    };

    const savedBodegaMan = localStorage.getItem('savedBodegaMan');
    console.log(savedBodegaMan)
    if (savedBodegaMan === true){
        bodegaManClicked = true;
        setInterval(autoBodega, 5000);
    }; 

    const savedSMG = localStorage.getItem('savedSMG');
    console.log(ownsSMG)
    if (savedSMG === true){
        ownsSMG = true;
    };
});

function updateCash(){
    cashDisplay.textContent = cash;
    localStorage.setItem('savedCash', cash);
};

// Upgrade to an SMG

function hideSMG(){
    buySMG.style.display = 'none';
};

function upgradeSMG(){
    if (cash >= 500){
        cash -= 500;
        updateCash();
        hideSMG();
        ownsSMG = true;
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


const clearCashBtn = document.getElementById("clear");
clearCashBtn.addEventListener("click", clearCash);
function clearCash(){
    cash = 0;
    updateCash();
};