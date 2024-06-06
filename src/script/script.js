const form = document.getElementById('form');
const requiridos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span');
const emailRegex = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i; 

function setarErro(login){
    requiridos[login].style.border = '2px solid #d00000';
    spans[login].style.display = 'block';
}

function tirarErro(login) {
    requiridos[login].style.border = '';
    spans[login].style.display = 'none';
}

function nameValidate(){
    if(requiridos[0].value.length < 3){
        setarErro(0);
    } else {
       tirarErro(0);
    }
}

function lastNameValidate(){
    if(requiridos[1].value.length < 3){
        setarErro(1);
    } else {
        tirarErro(1);
    }
}

function emailValidate() {
    if(emailRegex.test(requiridos[2].value)) {
        tirarErro(2)
    } else {
        setarErro(2);
    }
}

function passwordValidation() {
    if(requiridos[3].value.length == 8){
        tirarErro(3)
    } else {
        setarErro(3)
    }
}


function botao(){
    alert('você esta logado')

}