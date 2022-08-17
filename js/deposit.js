document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = getInputFieldValueById('deposit-field');

    const previousDeposit = getTextElementValueById('deposit-total');

    const totalDeposit = previousDeposit + newDeposit;

    setTextElementValueById('deposit-total', totalDeposit);

    const balanceElement = getTextElementValueById('balance-total');

    const newBalance = balanceElement + newDeposit;

    setTextElementValueById('balance-total', newBalance);

})