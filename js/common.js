function getTextElementByValue(elmentId){
    const phoneTotalElement = document.getElementById(elmentId);
    const phoneTotalElementStiring = phoneTotalElement.innerText
    const carentPhoneTotal = parseInt(phoneTotalElementStiring);
    return carentPhoneTotal;
}

function calculateSubtotal(){
    const carentPhoneTotal = getTextElementByValue('phone-total-price');
    const carentCaseTotal = getTextElementByValue('total-price');

    const carentSubTotal = carentCaseTotal + carentPhoneTotal;
    const carentSubtotalPrice = document.getElementById('subtotal');
    carentSubtotalPrice.innerText = carentSubTotal;
}
console.log('hello')