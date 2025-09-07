const buttonSubmit = document.querySelector(".button-submit");
const nameError = document.querySelector(".name-error");
let nameIcon = document.getElementById("name-icon"); // target the <i> tag
const formHeading = document.querySelector("#form-heading");
const sign_in = document.querySelector(".sign-in");
const form_h1 = document.querySelector("#form-h1");
const confirm_Passinput = document.querySelector("#confirmPasswordDiv");

// Add this variable at the top of script.js file
let formState = "create"; // 'create' for Create Account, 'sign-in' for Sign-In


buttonSubmit.addEventListener("click",(e)=>{
    e.preventDefault();  // it allows button to not submit automatically //
    
if (
  validateName() &&
  validateEmail() &&
  validatePassword() &&
  validateConfirm_Password() &&
  document.querySelector("#password").value === document.querySelector("#confirm-password").value
) {
  alert("Form is submitted successfully");
} else {
  alert("Passwords do not match!");
}
});
   

sign_in.addEventListener("click",alreaadyUser);


buttonSubmit.addEventListener("click", (e) => { 
    e.preventDefault();

    let isFormValid = false;

    if (formState === "create") {
        // For "Create Account", all three fields must be valid
        if (validateName() && validateEmail() && validatePassword() && validateConfirm_Password()) {
            isFormValid = true;
        }
    } else if (formState === "sign-in") {
        // For "Sign-In", only email and password need to be valid
        if (validateEmail() && validatePassword()) {
            isFormValid = true;
        }
    }

    if (isFormValid) {
        alert("Form is submitted successfully");
        // Clear the form inputs after successful submission
        // document.getElementById('email').value = '';
        email.value = "";
        // document.getElementById('password').value = '';
        pass.value = "";
        confirm_pass.value = "";
    }
});



function alreaadyUser(){
    formHeading.innerHTML = "Sign-In";
    form_h1.style.display = "none";
    confirm_Passinput.style.display = "none";
    sign_in.innerHTML = "";

    
    formState = "sign-in"; // Update the state
}


function oldUser(){
    sign_in.innerHTML = "New User ?Sign-In";
}

function validateName(){
    let name = document.getElementById("name").value;
    let nameError = document.querySelector(".name-error");
    let nameIcon = document.getElementById("name-icon"); // target the <i> tag


    if (name.length == 0){
        nameError.innerHTML = "Name is required";
        nameIcon.classList.remove("fa-check");  // remove check
        nameIcon.classList.add("fa-xmark");     // add cross
        return false // will not run further// 
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write a full valid name";
        nameIcon.classList.remove("fa-check");
        nameIcon.classList.add("fa-xmark");
        return false;
    }
    nameError.innerHTML = "";
    nameIcon.classList.remove("fa-xmark"); // remove cross
    nameIcon.classList.add("fa-check");    // add check
    return true;
}


function validateEmail(){
    let email = document.getElementById("email").value;
    let emailError = document.querySelector(".email-error");
    let emailIcon = document.querySelector("#email-icon");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex


    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailIcon.classList.remove("fa-check");
        emailIcon.classList.add("fa-xmark");
        return false;
    }

    if(!email.match(emailPattern)){
        emailError.innerHTML = "Write Your Full valid email";
        emailIcon.classList.remove("fa-check");
        emailIcon.classList.add("fa-xmark");
        return false;
    }

    emailError.innerHTML = "";
    emailIcon.classList.remove("fa-xmark"); // remove cross
    emailIcon.classList.add("fa-check");    // add check
    return true;
}


function validatePassword(){
    let pass = document.getElementById("password").value;
    let passError = document.querySelector(".pass-error");
    let passIcon = document.querySelector("#pass-icon");
    let passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/; // Standard pass regex // 


    if(pass.length == 0){
        passError.innerHTML = "Password is required";
        passIcon.classList.remove("fa-check");
        passIcon.classList.add("fa-xmark");
        return false;
    }

    if(!pass.match(passPattern)){
        passError.innerHTML = "Password should contain atleast 1 Uppercase 1 lowercase 1 Digit 1symbol and 1 alphabet";
        passIcon.classList.remove("fa-check");
        passIcon.classList.add("fa-xmark");
        return false;
    }

    passError.innerHTML = "";
    passIcon.classList.remove("fa-xmark"); // remove cross
    passIcon.classList.add("fa-check");    // add check
    return true;
}


function validateConfirm_Password(){
    let confirm_pass = document.getElementById("confirm-password").value;
    let confirm_passError = document.querySelector(".confirm-pass-error");
    let confirm_passIcon = document.querySelector("#confirm-pass-icon");
    let confirm_passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/; // Standard pass regex // 


    if(confirm_pass.length == 0){
        confirm_passError.innerHTML = "Password is required";
        confirm_passIcon.classList.remove("fa-check");
        confirm_passIcon.classList.add("fa-xmark");
        return false;
    }

    if(!confirm_pass.match(confirm_passPattern)){
        confirm_passError.innerHTML = "Password should contain atleast 1 Uppercase 1 lowercase 1 Digit 1symbol and 1 alphabet";
        confirm_passIcon.classList.remove("fa-check");
        confirm_passIcon.classList.add("fa-xmark");
        return false;
    }

    confirm_passError.innerHTML = "";
    confirm_passIcon.classList.remove("fa-xmark"); // remove cross
    confirm_passIcon.classList.add("fa-check");    // add check
    return true;
}

