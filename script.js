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

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length < 3) {
    setErrorFor(username, "Username must be at least 3 characters long");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Password must be at least 6 characters long");
  } else {
    setSuccessFor(password);
  }

  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (passwordValue !== confirmPasswordValue) {
    setErrorFor(confirmPassword, "Passwords do not match");
  } else {
    setSuccessFor(confirmPassword);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isValidEmail(emailValue)) {
    setErrorFor(email, "Enter a valid email");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error");
    
    errorMessage.innerText = message;
    errorMessage.style.visibility = "visible"; // Show error message
    input.classList.add("input-error"); // Add red border + shake animation
    input.classList.remove("input-success"); // Remove success border
  }
  
  function setSuccessFor(input) {
    const formGroup = input.parentElement;
    const errorMessage = formGroup.querySelector(".error");
  
    errorMessage.innerText = ""; // Clear error message
    errorMessage.style.visibility = "hidden"; // Hide error message
    input.classList.remove("input-error"); // Remove error border
    input.classList.add("input-success"); // Add green border
  }

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
