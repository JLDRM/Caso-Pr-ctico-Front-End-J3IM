var form  = document.getElementsByTagName('form')[0];

var email = document.getElementById('mail');
var pass = document.getElementById('pass');

var errormail = document.querySelector('.error');
var errorpass = document.querySelector('.errorp');


email.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (email.validity.valid) {

    errormail.innerHTML = ""; 
    errormail.className = "error";

  } else{
    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";
    
  }

}, false);

pass.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!pass.validity.patternMismatch || pass.value=="") {

    errorpass.innerHTML = ""; 
    errorpass.className = "error";
  }

}, false);




//EVENTO DE ENVIAR INFORMACIÓN:
form.addEventListener("submit", function (event) {
event.preventDefault();

var isNokMail="";
var isNokPass="";

var pintoclasem="error";
var pintoclasep="error";

if(email.value=="" || !email.validity.valid){
    isNokMail="¡Yo esperaba una dirección de correo, honey!";
    
  }

if(pass.value==""|| pass.validity.patternMismatch){
    isNokPass="¡Debes establecer una password que contenga: - Una letra mayuscula " 
    +" - Una letra minuscula "
    +" - Un numero - Un caracter especial  - Minimo 6 caracteres, honey!";
    
  }

errormail.innerHTML = isNokMail;
errormail.className = pintoclasem;

errorpass.innerHTML = isNokPass;
errorpass.className = pintoclasep;

if(!isNokMail && !isNokPass){
    console.log('hola');
    var url = "http://www.mocky.io/v2/5a5390ae300000e22c1ebfe4";
    var request = new XMLHttpRequest();

    request.open("POST", url);
    request.onload = function () {
      if (request.status == 200) {

        location.href=request.response;

      }
    };
    request.send();
  }
},false);



