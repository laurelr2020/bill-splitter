'use strict'

const calculate = function() {
    let bill = parseFloat(document.getElementById("bill-input").value);
    let tip = parseInt(document.getElementById("tip-input").value);
    let total = document.getElementById("total");

    if(bill !== "" && tip !== ""){
        let tipPercent = getTip(tip);
        total.innerHTML = "$" + getTotal(bill, tipPercent);
    }
}

const billInput = document.getElementById("bill-input");
    billInput.addEventListener("change", 
        function(){
            let bill = parseFloat(document.getElementById("bill-input").value);
            getTipHints(bill);
        })

const addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", 
        function (e) {
            e.preventDefault();
            calculate();
        })

const resetButton = document.getElementById("resetBtn");
    resetButton.addEventListener("click", 
        function (e){
            e.preventDefault();
            document.querySelector("form").reset();
            document.getElementById("total").innerHTML = "$0";
            document.getElementById("footer").hidden = true;
        })

function getTip(tipNum){
    return roundCorrectlyPlease((tipNum / 100));
}

function getTotal(bill, tipPercent){
    let tip = roundCorrectlyPlease(bill * tipPercent);
    return bill + tip;
}

function roundCorrectlyPlease(num){
    let prepareToBeRounded = (num * 10).toFixed(20);
    let roundedTip = Math.round(prepareToBeRounded * 10) / 100;
    return roundedTip;
}

function getTipHints(bill){
    let hints = document.getElementById("tip-hints");
    let ten = roundCorrectlyPlease(bill * (.10));
    let fifteen = roundCorrectlyPlease(bill * (.15));
    let twenty = roundCorrectlyPlease(bill * (.20));

    hints.innerHTML = "10%: $" + ten + " | 15%: $" + fifteen + " | 20%: $" + twenty;

    document.querySelector("footer").removeAttribute("hidden");
}