const pswdValidate = document.getElementById('pwdValidate');
const logoImage = document.getElementById('logoImage');
const userName = document.getElementById('emailAdd');
let invalidUsername = document.getElementById('validator');
let invalidPassword = document.getElementById('pwdValidator');
var pwdImageSource = './static/wrongPswd.png';
var corImageSource = './static/correctPwd.png';
var originalImageSource = './static/welcome.png';



function animation(image) {
    logoImage.classList.add('opacity-25')
    setTimeout(() => {
        logoImage.classList.remove('animation-pulse');
        logoImage.src = image;
        logoImage.classList.replace('opacity-25', 'opacity-100');
    }, 10);
}

function getPassword() {
    animation(pwdImageSource);
    let inputValue = pswdValidate.value;
    let username = userName.value;
    console.log(inputValue, username);
    if (inputValue === 'test' && username === 'test') {
        // var image = document.getElementById('logoImage');
        animation(corImageSource);
        logoImage.title = "Ready to go! Good Luck.";
        // invalidPassword.classList.add('opacity-0');
    }
    if (inputValue != 'test' && inputValue != null || username != 'test') {
        animation(pwdImageSource);
        logoImage.title = 'Invalid username or password.'
        // invalidPassword.classList.remove('opacity-0');
    }
    if (inputValue == '' && username == '') {
        animation(originalImageSource);
        // invalidPassword.classList.add('opacity-0');

    }
}


function validateUserPassword() {
    let pwd = pswdValidate.value;
    let usrname = userName.value;


    if (pwd != 'test' || usrname != 'test') {
        invalidPassword.classList.remove('opacity-0', 'text-red-700');
        invalidPassword.classList.add('text-red-700');
        pswdValidate.classList.add('border-2', 'border-red-700');
        userName.classList.add('border-2', 'border-red-700');
        pwdValidator.classList.add('mb-6');
    }
    if (pwd === 'test' && usrname === 'test') {
        alert('Login Sucessfully!');
        let anchor = document.createElement('a');

        anchor.href = 'quiz.html';
        anchor.target = "_blank";

        anchor.click();
    }
}
