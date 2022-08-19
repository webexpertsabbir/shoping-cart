function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('mobile-number-field');
    const phoneNumberFieldStiring = phoneNumberField.value;
    const previousPhoneNUmber = parseInt(phoneNumberFieldStiring);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNUmber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNUmber -1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const newTotalPrice = newPhoneNumber * 1219;
    const phoneTotalPrice = document.getElementById('phone-total-price');
    phoneTotalPrice.innerText = newTotalPrice;
}



document.getElementById('phone-number-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
})

document.getElementById('phone-number-minas').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
})