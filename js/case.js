document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldStiring = caseNumberField.value;
    const previousCaseNUmber = parseFloat(caseNumberFieldStiring);

    const newCaseNumber = previousCaseNUmber + 1;
    caseNumberField.value = newCaseNumber;
})