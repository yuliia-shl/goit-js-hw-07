const formEl = document.querySelector("form.login-form");
formEl.addEventListener("submit", processLogin);

function processLogin(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    let userData = {};
    
    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    };
    
    userData.email = email;
    userData.password = password;
    console.log("userData:", userData)
    form.reset();
};