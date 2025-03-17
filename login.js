const form = document.getElementById('login-form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    validateInputs();
});

function validateInputs() {
    let logEmail = email.value.trim();
    let logPass = password.value.trim();

    
    const getData = JSON.parse(localStorage.getItem('user'));

    if (!getData) {
        alert("No user found. Please sign up first.");
        return;
    }

    
    if (logEmail === getData.email && logPass === getData.password) {
        alert("Login successful! Redirecting...");
        // window.location.href = "dashboard.html"; // Redirect user
    } else {
        alert("Invalid email or password. Try again.");
    }
}
