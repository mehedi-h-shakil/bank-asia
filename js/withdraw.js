document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    const previousWithdrawAmount = getTextElementValueById('withdraw-total');

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    setTextElementValueById('withdraw-total', totalWithdrawAmount);

    const balanceElement = getTextElementValueById('balance-total');

    const newBalance = balanceElement - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalance);

})