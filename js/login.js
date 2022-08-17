// step-1: add event handler on button 
document.getElementById('btn-login').addEventListener('click', function () {
    // step-2: get email input field value 
    const emailField = document.getElementById('email-field');
    const emailFieldValue = emailField.value;

    // step-3: get password input field value 
    const passwordField = document.getElementById('paasword-field');
    const passwordFieldValue = passwordField.value;

    // step-4: match email and password 
    if (emailFieldValue === "sneoo@gmail.com" && passwordFieldValue === "neoo") {
        window.location.href = 'bank.html'
    }

    else {
        alert('Invalid User')
    }
})