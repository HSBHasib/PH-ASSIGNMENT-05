const fieldset = document.querySelector('fieldset');
const userName = document.getElementById('name');
const pass = document.getElementById('pass');
const signInBtn = document.getElementById('signIn-btn');

// Input Validation
const inputValidation = () => {
    let enteredName = userName.value;
    let enteredPass = pass.value;

    // Remove Previous input field text

    // Default UserName and Password
    const correctUser = "admin";
    const correctPass = "admin123";

    // Check is user enter correct userName and Password 
    if (enteredName === "" || enteredPass === "") {
        alert("Please fill in both Username and Password!");
    } 
    else if (enteredName !== correctUser) {
        alert("Incorrect Username! Please check again.");
    } 
    else if (enteredPass !== correctPass) {
        alert("Incorrect Password! Please check again.");
    } 
    else {
        // Remove Previous input field text
        userName.value = "";
        pass.value = "";
        alert("Welcome Admin.");
        window.location.href = "home.html"; 
    }
}

signInBtn.addEventListener('click', inputValidation);

window.addEventListener('keydown', (dets) => {
    if (dets.key === 'Enter') {
        inputValidation();
    }
});