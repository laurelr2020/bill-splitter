const calculate = function() {
    let bill = parseFloat(document.getElementById("bill-input").value);
    let tip = parseInt(document.getElementById("tip-input").value);
    let total = document.getElementById("total");

    if(bill !== "" && tip !== ""){
        let tipPercent = getTip(tip);
        total.innerHTML = "$" + getTotal(bill, tipPercent);
    }
}

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