function getInputFieldValueById(inputFieldId) {
    const inputFieldValue = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFieldValue.value;
    const value = parseFloat(inputFieldValueString);
    inputFieldValue.value = '';
    return value;
}

function getTextElementValueById(textElementId) {
    const textElementValue = document.getElementById(textElementId);
    const textElementString = textElementValue.innerText;
    const element = parseFloat(textElementString);
    return element;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}