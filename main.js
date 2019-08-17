'use strict'

const calculate = function() {
    let bill = parseFloat(document.getElementById("bill-input").value);
    let tip = parseInt(document.getElementById("tip-input").value);
    let total = document.getElementById("total");

    if(!isNaN(bill) && !isNaN(tip)){
        let tipAmount= getTip(tip, bill);
        total.innerHTML = "Tip: " + tipAmount + " | Total: $" + getTotal(bill, tipAmount);
        document.getElementById("total-div").hidden = false
    }
}

const billInput = document.getElementById("bill-input");
    billInput.addEventListener("change", 
        function(){
            let bill = parseFloat(document.getElementById("bill-input").value);
            if(isNaN(bill))
                document.getElementById("footer").hidden = true;
            else
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
            document.getElementById("total-div").hidden = true;
            document.getElementById("footer").hidden = true;
        })

function getTip(tip, bill){
    let tipPercent = roundCorrectlyPlease((tip / 100));
    let tipAmount = roundCorrectlyPlease(bill * tipPercent);
    return tipAmount;
}

function getTotal(bill, tip){
    return bill + tip;
}

function roundCorrectlyPlease(num){
    let prepareToBeRounded = (num * 10).toFixed(20);
    let roundedNum = Math.round(prepareToBeRounded * 10) / 100;
    return roundedNum;
}

function getTipHints(bill){
    let hints = document.getElementById("tip-hints");
    let ten = roundCorrectlyPlease(bill * (.10));
    let fifteen = roundCorrectlyPlease(bill * (.15));
    let twenty = roundCorrectlyPlease(bill * (.20));

    hints.innerHTML = "10%: $" + ten + " | 15%: $" + fifteen + " | 20%: $" + twenty;

    document.querySelector("footer").removeAttribute("hidden");
}