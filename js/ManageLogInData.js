let btnSignUpForm = document.getElementById("SignUp");
btnSignUpForm.addEventListener('click', () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register").style.display = "block";
});

let btnSignInForm = document.getElementById("SignIn");
btnSignInForm.addEventListener('click', () => {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register").style.display = "none";
});