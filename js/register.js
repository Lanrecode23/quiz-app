const form = document.querySelector('.form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const firstname = document.getElementById('firstname')
const lastName = document.getElementById('Lastname')
const phone = document.getElementById('phone')
const confirmpassword = document.getElementById('confirmpassword')
const phoneRegex = /^[0-9]{11}$/;


form.addEventListener('submit', function (e) {
    e.preventDefault();
    
     if (password.value !== confirmpassword.value) {
        document.getElementById("error3").innerHTML = "pasword does not match";
        error3.style.color = "Red"
        return;
    }
    else if (password.value == confirmpassword.value) {
        document.getElementById("error3").style.display = "none";
        
        swal({
            title: "Congratulations",
            text: ` ${lastName.value} ,You have successfully submitted`,
            icon: "success",
        });

        setTimeout(() => {
            window.location.href = "login.html"

        }, 2000);
    }
    let newUser = {
        Email: email.value,
        Password: password.value,
        firstname: firstname.value,
        lastName: lastName.value
    }
    localStorage.setItem("user", JSON.stringify(newUser));
    localStorage.setItem("firstname", JSON.stringify(newUser.lastName));
});

