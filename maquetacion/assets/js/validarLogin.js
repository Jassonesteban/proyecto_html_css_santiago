//variables globales

var email = 'jgualguan';
var password = '1233';

window.addEventListener('load', () => {
    //redirectPage();
});

function validarPageLogin () {
    //validamos si existe un array almacenado en el local
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
}

function redirectPage () {
    var getEmail = localStorage.getItem('email');

    if(!getEmail){
        location.href = "file:///C:/Users/Jasson%20Gualgan/Desktop/html_css/maquetacion/login.html";
    } else {
        location.href = "file:///C:/Users/Jasson%20Gualgan/Desktop/html_css/maquetacion/index.html";
    }
}

