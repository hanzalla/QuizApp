const pswdValidate = document.getElementById('pwdValidate');
const logoImage = document.getElementById('logoImage');
const userName = document.getElementById('emailAdd');
var invalidUsername = document.getElementById('validator');
var invalidPassword = document.getElementById('pwdValidator');
var mainDiv = document.getElementById('mainDiv');
var sign_up = document.getElementById('sign_up');
var loginPage = document.getElementById('loginPage');
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
    if (usrname === 'test') {
        if (pwd === 'test') {
            alert('Login Sucessfully!');
            let anchor = document.createElement('a');

            anchor.href = 'quiz.html';
            anchor.target = "_blank";

            anchor.click();
        } else {
            alert('Invalid Login Details.');

        }

    }
}



function menubar_visible() {
    let menu_bar = document.getElementById('menu_bar');
    let bars = document.getElementById('bars');
    let icons = document.querySelector('i');

    if (icons.className == "fa-solid fa-bars") {
        menu_bar.classList.remove('hidden', 'sm:hidden');
        icons.classList.add('transition-transform', 'ease-in-out', 'duration-150');
        icons.className = "fa-solid fa-x";
    }
    else {
        menu_bar.classList.add('hidden', 'sm:hidden');
        icons.className = "fa-solid fa-bars";

    }



}



function registerationForm() {
    let body = document.querySelector('body');
    loginPage.classList.add('blur-lg');
    sign_up.classList.remove('hidden', 'opacity-100');
    let timeOut;
}

        
function closeSignup() {

    mainDiv.classList.remove('blur-md');
    loginPage.classList.remove('blur-lg');
    sign_up.classList.add('hidden');


}




window.onload = function () {
    let sinupdiv = document.getElementById('sinupdiv');
    let mainDiv = document.getElementById('mainDiv');
    if (sinupdiv) {
        setTimeout(() => {
            sinupdiv.classList.remove('hidden');
            mainDiv.classList.add('blur-md');
        }, 10000);

    }


}


setInterval(() => {

}, interval);