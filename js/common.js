function getTextElementByValue(elmentId){
    const phoneTotalElement = document.getElementById(elmentId);
    const phoneTotalElementStiring = phoneTotalElement.innerText
    const carentPhoneTotal = parseInt(phoneTotalElementStiring);
    return carentPhoneTotal;
}

function setTextElementValueById(elementId, value){
    const carentSubtotalPrice = document.getElementById(elementId);
    carentSubtotalPrice.innerText = value;
}

function calculateSubtotal(){
    const carentPhoneTotal = getTextElementByValue('phone-total-price');
    const carentCaseTotal = getTextElementByValue('total-price');

    const carentSubTotal = carentCaseTotal + carentPhoneTotal;
    setTextElementValueById('subtotal', carentSubTotal);

    const taxAmountString = (carentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount);

    const finalAmount = carentSubTotal + taxAmount;
    setTextElementValueById('final-amount', finalAmount);
}
