"use strict"

window.onload = function(){
    let iceCreamOrder = document.querySelector("#iceCreamOrder")

    iceCreamOrder.addEventListener("submit, calcOrder")

}

function calcOrder(event){
    event.preventDefault();

    let theOrder = event.target

    let totalForOrder = 2.25 * Number(theOrder.numScoops.value)
}