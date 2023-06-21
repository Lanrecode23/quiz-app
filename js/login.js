const myForm = document.querySelector('.form')
const myEmail = document.getElementById('email')
const myPassword = document.getElementById('password');
const message = document.getElementById('outerMessage')


myForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (myEmail.value === "") {
        message.innerHTML = '<div class="alert alert-danger" role="alert">Please enter Email</div>'
    }
    else if (myPassword.value === "") {
        message.innerHTML = '<div class="alert alert-danger" role="alert">Please enter password</div>'
    }
    // else if (JSON.parse(localStorage.getItem("user"))) {
    let users = JSON.parse(localStorage.getItem("user"))
    if (users.Email === myEmail.value && users.Password === myPassword.value) {
        iziToast.success({
            title: 'Success',
            position: 'topRight',
            message: 'Congratulations! You have successfully login',
        });
        setTimeout(() => {
            window.location.href = "cbt.html"
    
        }, 2000);
    }
    else {
        iziToast.error({
            title: 'Error',
            position: 'topRight',
            message: 'invalid username/password'
        });
        
    }
});