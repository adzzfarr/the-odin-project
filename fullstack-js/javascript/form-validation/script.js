const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');
const postal = document.getElementById('postal');
const postalError = document.querySelector('#postal + span.error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.querySelector('#confirm-password + span.error');

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showEmailError();
    }
});

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showCountryError();
    }
});

postal.addEventListener('input', () => {
    if (postal.validity.valid) {
        postalError.textContent = '';
        postalError.className = 'error';
    } else {
        showPostalError();
    }
});

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showPasswordError();
    }

    // Live validate confirm password as well
    if (confirmPassword.value !== "") {
        if (confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity("");
            confirmPasswordError.textContent = '';
            confirmPasswordError.className = 'error';
        } else {
            confirmPassword.setCustomValidity("Passwords do not match.");
            confirmPasswordError.textContent = "Passwords do not match.";
            confirmPasswordError.className = 'error active';
        }
    }
})

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
        confirmPassword.setCustomValidity("");
        confirmPasswordError.textContent = '';
        confirmPasswordError.className = 'error';
    } else {
        confirmPassword.setCustomValidity("Passwords do not match.");
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.className = 'error active';
    }
});

form.addEventListener('submit', (event) => {
    form.className = 'submitted';
    let validity = true;

    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
        validity = false;
    }

    if (!country.validity.valid) {
        showCountryError();
        event.preventDefault();
        validity = false;
    }

    if (!postal.validity.valid) {
        showPostalError();
        event.preventDefault();
        validity = false;
    }

    if (!password.validity.valid) {
        showPasswordError();
        event.preventDefault();
        validity = false;
    }

    if (!confirmPassword.validity.valid) {
        showConfirmPasswordError();
        event.preventDefault();
        validity = false;
    }

    if (validity) {   
        alert("Form submitted successfully!");
    }
})

function showEmailError() {
    if (email.validity.valueMissing || email.validity.typeMismatch || email.validity.patternMismatch) {
        emailError.textContent = "You need to enter an email address. \n (e.g. example@email.com)";
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters.`;
    }

    emailError.className = 'error active';
}

function showCountryError() {
    if (country.validity.valueMissing || country.validity.tooShort) {
        countryError.textContent = "You need to enter a country.";
        countryError.className = 'error active';
    }
}

function showPostalError() {
    if (postal.validity.valueMissing) {
        postalError.textContent = "You need to enter a postal code.";
        postalError.className = 'error active';
    }
}

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter a password.";
        passwordError.className = 'error active';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters.`;
        passwordError.className = 'error active';
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = `Password should have at least one letter and one number.`;
        passwordError.className = 'error active';
    }
}

function showConfirmPasswordError() {
    const inputPassword = password.value;
    const inputConfirmPassword = confirmPassword.value;

    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "You need to confirm your password.";
        confirmPasswordError.className = 'error active';
    } else if (inputPassword !== inputConfirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        confirmPasswordError.className = 'error active';
    }
}