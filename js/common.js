function getTextElementByValue(elmentId){
    const phoneTotalElement = document.getElementById(elmentId);
    const phoneTotalElementStiring = phoneTotalElement.innerText
    const carentPhoneTotal = parseInt(phoneTotalElementStiring);
    return carentPhoneTotal;
}
