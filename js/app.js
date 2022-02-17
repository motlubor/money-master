
// income calculation section =============================================================================

document.getElementById('calculate-cost').addEventListener('click', function () {

    // get all input value from all type of input fields 

    const foodCostInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodCostInput.value);

    const rentCostInput = document.getElementById('rent-cost');
    const rentCost = parseFloat(rentCostInput.value);

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesCost = parseFloat(clothesCostInput.value);

    // sum of all input field value 

    const totalCost = foodCost + rentCost + clothesCost;


    //  catch total expences field
    const totalExpences = document.getElementById('total-expences');

    totalExpences.innerText = totalCost;


    // cath income field 
    const previousIncomeAmount = document.getElementById('income-amount').value;
    const newIncomeAmount = parseFloat(previousIncomeAmount);
    // console.log(newIncomeAmount);

    // catch balance text 
    const previousBalanceAmont = document.getElementById('balance');
    const newBalanceAmount = parseFloat(previousBalanceAmont.innerText);
    console.log(newBalanceAmount);
    const remainBalance = newIncomeAmount - totalCost;

    // set the value of remaion balance 

    previousBalanceAmont.innerText = remainBalance;



})