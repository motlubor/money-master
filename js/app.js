
// income calculation section =============================================================================

document.getElementById('calculate-cost').addEventListener('click', function () {

    // get all input value from all type of input fields 

    const foodCostInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodCostInput.value);

    const rentCostInput = document.getElementById('rent-cost');
    const rentCost = parseFloat(rentCostInput.value);

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesCost = parseFloat(clothesCostInput.value);

    // sum of all input field value ==========================//////////////////////////==============================
    if (foodCost < 0) {
        totalCost = false;
    }
    else if (rentCost < 0) {

    }
    else if (clothesCost < 0) {

    }
    else {
        const totalCost = foodCost + rentCost + clothesCost;
        const totalExpences = document.getElementById('total-expences');

        totalExpences.innerText = totalCost;
        // cath income field 
        const previousIncomeAmount = document.getElementById('income-amount').value;
        const newIncomeAmount = parseFloat(previousIncomeAmount);


        // catch balance text 
        const previousBalanceAmont = document.getElementById('balance');
        const newBalanceAmount = parseFloat(previousBalanceAmont.innerText);

        const remainBalance = newIncomeAmount - totalCost;

        // set the value of remaion balance 

        previousBalanceAmont.innerText = remainBalance;
    }





    //  catch total expences field







})



// ======================================= savings calculation section =================================================

const savings = document.getElementById('saving-button').addEventListener('click', function () {


    // get saving input 

    const savingInput = document.getElementById('saving-input');
    const savingAmountInput = parseFloat(savingInput.value);

    console.log(savingAmountInput);

    // get income Balance 
    const previousIncomeAmount = document.getElementById('income-amount');
    const newIncomeAmount = parseFloat(previousIncomeAmount.value);

    console.log(newIncomeAmount);

    // calculate savings amounts


    const savingPercent = newIncomeAmount / 100 * savingAmountInput;

    // set calculated savings amounts

    const savingAmount = document.getElementById('saving-amount');
    const newSavingAmount = parseFloat(savingAmount.innerText);

    savingAmount.innerText = savingPercent;

    // =============================================== calculate remaining balance=====================================


    // get remaining balance by id 

    const remainingBalance = document.getElementById('remain-balance');
    const remaning = parseFloat(remainingBalance.innerText);

    const foodCostInput = document.getElementById('food-cost');
    const foodCost = parseFloat(foodCostInput.value);

    const rentCostInput = document.getElementById('rent-cost');
    const rentCost = parseFloat(rentCostInput.value);

    const clothesCostInput = document.getElementById('clothes-cost');
    const clothesCost = parseFloat(clothesCostInput.value);

    // sum of all input field value 

    const totalCost = foodCost + rentCost + clothesCost;



    // totalcost 

    const totalExpences = document.getElementById('total-expences');

    totalExpences.innerText = totalCost;

    // get remain balance for main income section 
    const previousBalanceAmont = document.getElementById('balance');
    const newBalanceAmount = parseFloat(previousBalanceAmont.innerText);

    const remainBalance = newIncomeAmount - totalCost;
    // get remaion balance from income field 



    const totalRemainBalance = remainBalance - savingPercent;
    console.log(totalRemainBalance);


    remainingBalance.innerText = totalRemainBalance;

    foodCostInput.value = '';
    rentCostInput.value = '';
    clothesCostInput.value = '';
})