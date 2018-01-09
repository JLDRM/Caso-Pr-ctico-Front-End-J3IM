var form  = document.getElementsByTagName('form')[0];
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telef = document.getElementById('telef');
var habili = document.getElementById('habili');
var hobby = document.getElementById('hobby');
var cv = document.getElementById('cv');

var errnombre = document.querySelector('.errorn');
var erremail = document.querySelector('.errorm');
var errtelef = document.querySelector('.errort');
var errhabili = document.querySelector('.errorh');
var errhobby = document.querySelector('.errorb');

//NOMBRE
nombre.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (nombre.input=="") {
    errnombre.innerHTML = ""; 
    errnombre.className = "error";
  }
}, false);
//MAIL
email.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (email.validity.valid||email.value=="") {

    erremail.innerHTML = ""; // Limpia el contenido del mensaje
    erremail.className = "error"; // Restablece el estado visual del mensaje

  } else{
    erremail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    erremail.className = "error active";
    
  }

}, false);
//TELEFONO
telef.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!telef.validity.patternMismatch) {

    errtelef.innerHTML = ""; // Limpia el contenido del mensaje
    errtelef.className = "error"; // Restablece el estado visual del mensaje

  } else{
    errtelef.innerHTML = "¡Como vamos a llamarte si nos engañas, honney!";
    errtelef.className = "error active";
    
  }

}, false);
//HABILIDAD
habili.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (habili.value=="") {

    errhabili.innerHTML = ""; // Limpia el contenido del mensaje
    errhabili.className = "error"; // Restablece el estado visual del mensaje

  } 
}, false);
//HOBBY
hobby.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (hobby.value=="") {

    errhobby.innerHTML = ""; // Limpia el contenido del mensaje
    errhobby.className = "error"; // Restablece el estado visual del mensaje
  
  }

}, false);

//EVENTO DE ENVIAR INFORMACIÓN
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










