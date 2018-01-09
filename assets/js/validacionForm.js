var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var pass = document.getElementById('password');
var errormail = document.querySelector('.error');
var errorpass = document.querySelector('.errorp');


email.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (email.validity.valid) {

    errormail.innerHTML = ""; // Limpia el contenido del mensaje
    errormail.className = "error"; // Restablece el estado visual del mensaje

  } else{
    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";
    
  }

}, false);

pass.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (pass.validity.patternMismatch===false || pass.value=="") {

    errorpass.innerHTML = ""; // Limpia el contenido del mensaje
    errorpass.className = "error"; // Restablece el estado visual del mensaje
  }

}, false);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if(email.value==""&& pass.value==""){

    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";
    errorpass.innerHTML = "¡La contraseña debe empezar por mayuscula bro!";
    errorpass.clasName = "error.active";

  } else if (pass.value==""){  
    errorpass.innerHTML = "¡La contraseña debe empezar por mayuscula bro!";
    errorpass.clasName = "error.active";

  } else if (email.value==""){
    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";

  } else if (!email.validity.valid && pass.validity.patternMismatch){

    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";
    errorpass.innerHTML = "¡La contraseña debe empezar por mayuscula bro!";
    errorpass.clasName = "error.active";

  } else if (!email.validity.valid){
    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";

  } else if (pass.validity.patternMismatch){ 
    errorpass.innerHTML = "¡Debe empezar por mayuscula bro!"
    errorpass.clasName = "error.active"

  } else{
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









