//cursor
const cursor = document.querySelector(".cursor");
var timeout;
//Follow cursor
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //mouse stop
    function mouseStopped(){
        cursor.style.display = "none"
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 3000)
});
//Stop following cursor
document.addEventListener("mouseout",() => {
    cursor.style.display = "none";
})

//form validation
container = document.querySelector(".container");
pwShowHide = document.querySelectorAll(".showHidePw");
pwFields = document.querySelectorAll(".password");
signUp = document.querySelector(".signupLink");
login = document.querySelector(".loginLink");

//icon change
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                })
            }
            else{
                pwField.type = "password";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("fa-eye-slash", "fa-eye")
                })
            }
        })
    })
});

//switch between signup and login

signUp.addEventListener("click", function () {
    container.classList.add("active");
})

login.addEventListener("click", function () {
    container.classList.remove("active");
})

//form validation

function loginValidation(event){
    event.preventDefault();
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email === ""){
        alert("Please enter an email address!");
        return false;
    }
    if ( !regEmail.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }
    if (password == ""){
        alert("Please enter a password!");
        return false;
    }
    if (password.length < 6){
        alert("Password must be at least 6 characters long");
        return false;
    }
    else{
        alert("Login successful.");
    }
    return true;
}

function signUpValidation(event){
    event.preventDefault();
    let name = document.forms.signUpForm.name.value;
    console.log("name:", name);
    let email = document.forms.signUpForm.email.value;
    let password = document.forms.signUpForm.password.value;
    let confirmPw = document.forms.signUpForm.comfirmpwd.value;
    let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regName = /^[a-zA-Z\s\-]+$/;

    if (name === "" || !regName.test(name)) {
        alert("Please enter a name!");
        return false;
    }
    if (email === "") {
        alert("Please enter an email address.");
        return false;
    }
    if (!regEmail.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }
    if (password === "") {
        alert("Please enter a password.");
        return false;
    }
    if(password.length < 6){
        alert("Please enter a password with at least 6 characters.");
        return false;
    }
    if (confirmPw !== password) {
        alert("Passwords do not match, Please confirm your password.");
        return false;
    }
    return true;
}

document.querySelector(".signupForm .submitBtn").addEventListener("click", signUpValidation);