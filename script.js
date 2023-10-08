
const pswdValidate = document.getElementById('pwdValidate');
const logoImage = document.getElementById('logoImage');
const userName = document.getElementById('emailAdd');
var invalidUsername = document.getElementById('validator');
var invalidPassword = document.getElementById('pwdValidator');
var mainDiv = document.getElementById('mainDiv');
var sign_up = document.getElementById('sign_up');
var loginPage = document.getElementById('loginPage');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var stopTimes = document.getElementById('stopTimes');
var male = document.getElementById('Male');
var female = document.getElementById('Female');
var emailAdd = document.getElementById('emailAddress');
var passWord = document.getElementById('passWord');


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
    singUpPage();

    if (clearTimeout) {
        let sinupdiv = document.getElementById('sinupdiv');
        let mainDiv = document.getElementById('mainDiv');
        sinupdiv.classList.remove('hidden');
        mainDiv.classList.add('blur-md');


    }



}




function closeSignup() {

    mainDiv.classList.remove('blur-md');
    loginPage.classList.remove('blur-lg');
    sinupdiv.classList.add('hidden');


}


let timeOut = null;

function startTimer() {
    timeOut = setTimeout(() => {
        console.log('time out.')
        registerationForm();

    }, 15000);
}


function stopTimer() {
    clearTimeout(timeOut);
    console.log('stop timer called.');
    singUpPage();
}


window.onload = startTimer;


function singUpPage() {
    stopTimes.addEventListener('click', function () {
        stopTimer();
    });


}

function isValidEmail(email) {
    const emailRegex = /^\s*[\w\.-]+@[\w\.-]+\.\w+\s*$/;
    return emailRegex.test(email);
}

function isValidPassword(passWord) {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return regexPassword.test(passWord);

}

function emailValidation() {
    let emailValue = emailAdd.value;
    if (!isValidEmail(emailValue)) {
        alert("Invalid Emaill Address");
    }
    passwordValidation();
}

function passwordValidation() {
    let passWordValue = passWord.value;
    if (!isValidPassword(passWordValue) && passWordValue.length < 12) {
        alert("Using a strong password can help protect your account. A strong password should include a combination of uppercase letters, lowercase letters, numbers, and special characters.");
        passWord.classList.add('border-2', 'border-red-600');
    }
    else {
        passWord.classList.add('border-2', 'border-green-600');
    }

}

function showPassword() {
    let showPass = document.getElementById('showPassword');
    let showPasswordIcon = document.getElementById('showPasswordIcon');
    if (showPasswordIcon.className == 'fa-solid fa-eye-slash') {
        // showPasswordIcon.className.remove('fa-solid fa-eye-slash');
        showPasswordIcon.className = 'fa-solid fa-eye';
        passWord.type = 'text';
    }
    else if (showPasswordIcon.className == 'fa-solid fa-eye') {
        // showPasswordIcon.className.remove('fa-solid fa-eye');
        showPasswordIcon.className = 'fa-solid fa-eye-slash';
        passWord.type = 'password';
    }


    // showPass.classList.replace('fa-solid fa-eye-slash', 'fa-solid fa-eye');

}

let count = 0;


window.onload = function () {
    count = 0;
}
function passwordGenerateAlert() {

    if (count < 1) {
        alert(`Generate a Strong Password:
        Use at least 12 characters.
        Include a mix of upper and lower case letters.
        Add numbers and special characters for complexity.
        Remember to keep it secret`);
        count++;
    }
}

function passwordGenerator() {
    let words = "abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newWords = '';
    let num = '0123456789';
    let specialChar = "`!@#$%^&*()_+{}[],<>?/-";

    for (let i = 0; i < 12; i++) {
        const ranAlhpa = Math.floor(Math.random() * words.length);
        const ranNum = Math.floor(Math.random() * num.length);
        const ranSpecialChar = Math.floor(Math.random() * specialChar.length);
        if (!newWords.includes(ranAlhpa) && !newWords.includes(ranNum) && !newWords.includes(ranSpecialChar)) {
            newWords += words.substring(ranAlhpa, ranAlhpa + 1) + num.substring(ranNum, ranNum + 1) + specialChar.substring(ranSpecialChar, ranSpecialChar + 1);

        }
        if (newWords.length >= 12) {
            break;
        }


    }
    passWord.value = newWords;
}


function signupNextBtn() {
    let firstNames = firstName.value;
    let genderMale = male.value;
    let genderFemale = female.value;
    let emailValues = emailAdd.value;
    let passWords = passWord.value;

    if (firstNames == null || emailValues == null || passWords == null) {
        if (!genderMale.checked && !genderFemale.checked) {
            alert("Please select Gender.");

        }
        alert('Please provide complete information.')

    } else {
        alert('User has been created sucessfully.');
    }

}


//         for (let z = 0; z < newWords.length; z++) {
//             let newNum = Math.floor(Math.random() * 10);
//             if (!newWords.includes(newNum) &&) {
//                 newWords += newNum;

//             }

//         }
//         if (newWords.length > 8) {
//             break;
//         }

//     }

//     console.log(newWords);
// }




// function emailValidation() {
//     let email = emailAdd.value;
//     let emailSpace = email.charAt(0);
//     if (emailSpace === ' ') {
//         alert('Space at the beginning is not allowed');
//     }
//     console.log(emailSpace);
// }


