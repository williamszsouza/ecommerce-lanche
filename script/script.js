const form = document.getElementById('form')
const campos = document.querySelectorAll('.input-required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\S+@\S+\.\S+$/

function EmailValidate() {
    if (emailRegex.test(campos[0].value)) {
        RemoveError(0)
    }
    else {
        SetError(0)
    }
}

function SetError(index) {
    campos[index].style.border = '1px solid red';
    spans[index].style.display = 'block';
}


function RemoveError(index) {
    campos[index].style.border = '3px solid green'
    spans[index].style.display = 'none'
}



function PasswordValidate() {
    if (campos[1].value.length >= 8) {
        RemoveError(1)

    } else {
        SetError(1)
    }
}