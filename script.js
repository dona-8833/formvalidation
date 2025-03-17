const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();

    let isValid = true; 

    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
        isValid = false;
    } else if (usernameValue.length < 3) {
        setErrorFor(username, "Username must be at least 3 characters long");
        isValid = false;
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
        isValid = false;
    } else if (passwordValue.length < 6) {
        setErrorFor(password, "Password must be at least 6 characters long");
        isValid = false;
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Confirm Password cannot be blank");
        isValid = false;
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Passwords do not match");
        isValid = false;
    } else {
        setSuccessFor(confirmPassword);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Enter a valid email");
        isValid = false;
    } else {
        setSuccessFor(email);
    }

    if (isValid) {
        const userData = {
            username: usernameValue,
            email: emailValue,
            password: passwordValue,
        };

        localStorage.setItem("user", JSON.stringify(userData));

        alert("Signup successful! Redirecting to login...");
        window.location.href = "login.html"; 
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error");

    errorMessage.innerText = message;
    errorMessage.style.visibility = "visible"; 
    input.classList.add("input-error"); 
    input.classList.remove("input-success"); 
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error");

    errorMessage.innerText = ""; 
    errorMessage.style.visibility = "hidden"; 
    input.classList.remove("input-error"); 
    input.classList.add("input-success"); 
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
