function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldStiring = caseNumberField.value;
    const previousCaseNUmber = parseInt(caseNumberFieldStiring);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNUmber + 1;
    }
    else{
        newCaseNumber = previousCaseNUmber -1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCasePrice(newCaseNumber){
    const newTotalPrice = newCaseNumber * 59;
    const caseTotalPrice = document.getElementById('total-price');
    caseTotalPrice.innerText = newTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
})

document.getElementById('btn-case-minas').addEventListener('click', function(){
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldStiring = caseNumberField.value;
    // const previousCaseNUmber = parseFloat(caseNumberFieldStiring);
    // if(previousCaseNUmber > 0){
    //     const newCaseNumber = previousCaseNUmber - 1;
    // caseNumberField.value = newCaseNumber;

    // }
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
})