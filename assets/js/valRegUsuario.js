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
  } else {
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
    erremail.innerHTML = "¡Yo esperaba una dirección de correo, honey!";
    erremail.className = "error active";
    
  }

}, false);
//TELEFONO
telef.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (!telef.validity.patternMismatch) {

    errtelef.innerHTML = ""; 
    errtelef.className = "error"; 

  } else{
    errtelef.innerHTML = "¡Como vamos a llamarte si nos engañas, honey!";
    errtelef.className = "error active";
    
  }

}, false);
//HABILIDAD
habili.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (habili.value=="") {

    errhabili.innerHTML = ""; 
    errhabili.className = "error"; 
  } else {
    errhabili.innerHTML = ""; 
    errhabili.className = "error";
  } 
}, false);
//HOBBY
hobby.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (hobby.value=="") {

    errhobby.innerHTML = ""; 
    errhobby.className = "error"; 
  }else {
    errhobby.innerHTML = ""; 
    errhobby.className = "error";
  }

}, false);

//EVENTO DE ENVIAR INFORMACIÓN
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var isNokMail="";
  var isNokNombre="";
  var isNokTelef="";
  var isNokHabili="";
  var isNokHobby="";
  var pintoclasem="error";
  var pintoclasen="error";
  var pintoclaset="error";
  var pintoclaseh="error";
  var pintoclaseb="error";
  
  if(email.value=="" || !email.validity.valid){
    isNokMail="Introduce un email correcto";
    //pintoclasem="error.active";
  }

  if(nombre.value==""){
    isNokNombre="¡Como te llamas, honey!";
    //pintoclasen="error.active";
  }

  if(telef.value==""||telef.validity.patternMismatch){
    isNokTelef="¡Como vamos a llamarte si nos engañas, honey!";
    //pintoclaset="error.active";
  }

  if(habili.value==""){
    isNokHabili="¡No seas tan humilde fella!";
    //pintoclaseh="error.active";
  }

  if(hobby.value==""){
    isNokHobby="¡Va que como geek el javascript seguro te pone!";
    //pintoclaseb="error.active";
  }

  errnombre.innerHTML = isNokNombre;
  errnombre.className = pintoclasen;

  erremail.innerHTML = isNokMail;
  erremail.className = pintoclasem;

  errtelef.innerHTML = isNokTelef;
  errtelef.className = pintoclaset;
  
  errhabili.innerHTML = isNokHabili;
  errhabili.className = pintoclaseh;
  
  errhobby.innerHTML = isNokHobby;
  errhobby.className = pintoclaseb;  
  
  if(!isNokMail && !isNokNombre && !isNokTelef && !isNokHabili &&!isNokHobby){
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










