const description = document.getElementById("description")
const bodega = document.querySelector(".bodega")

bodega.addEventListener("mouseover", function(){
    description.textContent = "Rob a Bodega, earning you $20.";
})
bodega.addEventListener("mouseout", function(){
    description.textContent = "";
})