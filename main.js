const calculate = function() {
    let bill = parseFloat(document.getElementById("bill-input").value);
    let tip = parseInt(document.getElementById("tip-input").value);
    let total = document.getElementById("total");

    if(bill !== "" && tip !== ""){
        let tipPercent = getTip(tip);
        total.innerHTML = "$" + getTotal(bill, tipPercent);
    }

    console.log("Bill: " + bill);
    console.log("Tip: " + tip);
    console.log("Total:" + total.innerHTML );

}

const addButton = document.getElementById("addBtn");
    addButton.addEventListener("click", 
        function (e) {
            e.preventDefault();
            calculate();
        })

function getTip(tipNum){
    return (tipNum / 100).toFixed(2);
}

function getTotal(bill, tip){
    let tipAmount = Math.floor((bill * tip).toFixed(2));
    return bill + parseFloat(tipAmount);
}
