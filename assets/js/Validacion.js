
var Validacion=(function(){
  var form  = document.getElementsByTagName('form')[0];
  var nombre = document.getElementById('nombre');
  var apell = document.getElementById('apellido');
  var pass = document.getElementById('contraseña');
  var confipass = document.getElementById('conficontraseña');
  var email = document.getElementById('email');
  var telef = document.getElementById('telef');
  var habili = document.getElementById('habili');
  var hobby = document.getElementById('hobby');
  var cv = document.getElementById('cv');

  var errnombre = document.querySelector('.errorn');
  var errapell = document.querySelector('.errora');
  var errorpass = document.querySelector('.errorpass');
  var errorconfipass = document.querySelector('.errorconfipass');
  var erremail = document.querySelector('.errorm');
  var errtelef = document.querySelector('.errort');
  var errhabili = document.querySelector('.errorh');
  var errhobby = document.querySelector('.errorb');

  function valRegUsuario (){
  //NOMBRE
  nombre.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (nombre.input=="" || !nombre.validity.patternMismatch) {
      errnombre.innerHTML = ""; 
      errnombre.className = "error";
    }else{
      errnombre.innerHTML = "Debe empezar por mayuscula y sin !#¢%&..."; 
      errnombre.className = "error";
    }
  }, false);

  //APELLIDO
  apell.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (apell.input=="" || !apell.validity.patternMismatch) {
      errapell.innerHTML = ""; 
      errapell.className = "error";
    }else{
      errapell.innerHTML = "Debe empezar por mayuscula y sin !#¢%&..."; 
      errapell.className = "error";
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

  //CONTRASEÑA
  pass.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (pass.input==""||!pass.validity.patternMismatch) {
      errorpass.innerHTML = ""; 
      errorpass.className = "error";
    }
  }, false);

  //CONFIRMACIÓN CONTRASEÑA
  confipass.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (confipass.input==""||!confipass.validity.patternMismatch) {
      errorconfipass.innerHTML = ""; 
      errorconfipass.className = "error";
    }
  }, false);

  //TELEFONO
  telef.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (!telef.validity.patternMismatch || telef.value =="") {

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
    if (habili.value=="" || !habili.validity.patternMismatch) {

      errhabili.innerHTML = ""; 
      errhabili.className = "error"; 
    } else {
      errhabili.innerHTML = "Debe empezar por mayuscula y sin !#¢%&..."; 
      errhabili.className = "error"
    } 
  }, false);

    //HOBBY
    hobby.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (hobby.value=="" || !hobby.validity.patternMismatch) {

        errhobby.innerHTML = ""; 
        errhobby.className = "error"; 
      } else {
        errhobby.innerHTML = "Debe empezar por mayuscula y sin !#¢%&..."; 
        errhobby.className = "error";
      }
    }, false);

  //EVENTO DE ENVIAR INFORMACIÓN
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var isNokMail="";
    var isNokNombre="";
    var isNokApell="";
    var isNokPass="";
    var isNokConfipass="";
    var isDiferentPass="";
    var isNokTelef="";
    var isNokHabili="";
    var isNokHobby="";
    var pintoclasem="error";
    var pintoclasen="error";
    var pintoclasea="error";
    var pintoclasep="error";
    var pintoclasecp="error";
    var pintoclaset="error";
    var pintoclaseh="error";
    var pintoclaseb="error";

    if(email.value=="" || !email.validity.valid){
      isNokMail="¡Yo esperaba una dirección de correo, honey!";

    }

    if(nombre.value=="" || nombre.validity.patternMismatch){
      isNokNombre="¡Como te llamas, honey! No pongas cosas raras!";

    }

    if(apell.value=="" || apell.validity.patternMismatch){
      isNokApell="¡Como te llamas, honey! No pongas cosas raras!";

    }

    if(pass.value==""|| pass.validity.patternMismatch){
      isNokPass="¡Debes establecer una password que contenga: - Una letra mayuscula " 
      +"- Una letra minuscula "
      +"- Un numero - Un caracter especial  - Minimo 6 caracteres, honey!"
      ;

    }

    if(confipass.value=="" || confipass.validity.patternMismatch){
      isNokConfipass="¡Debes establecer una password que contenga: - Una letra mayuscula " 
      +"- Una letra minuscula "
      +"- Un numero - Un caracter especial  - Minimo 6 caracteres, honey!"
      ;

    }

    if(pass.value!=confipass.value){
      isDiferentPass="Las contraseñas son diferentes"
    }

    if(telef.value==""||telef.validity.patternMismatch){
      isNokTelef="¡Como vamos a llamarte si nos engañas, honey!";

    }

    if(habili.value=="" || habili.validity.patternMismatch){
      isNokHabili="¡No seas tan humilde fella! a No pongas cosas raras!";

    }

    if(hobby.value=="" || hobby.validity.patternMismatch){
      isNokHobby="¡Va que como geek el javascript seguro te pone! No escribas cosas raras!";

    }

    errnombre.innerHTML = isNokNombre;
    errnombre.className = pintoclasen;

    errapell.innerHTML = isNokApell;
    errapell.className = pintoclasea;

    errorpass.innerHTML = isNokPass+ " " +isDiferentPass;
    errorpass.className = pintoclasep;

    errorconfipass.innerHTML = isNokConfipass+ " " +isDiferentPass;
    errorconfipass.className = pintoclasecp;

    erremail.innerHTML = isNokMail;
    erremail.className = pintoclasem;

    errtelef.innerHTML = isNokTelef;
    errtelef.className = pintoclaset;

    errhabili.innerHTML = isNokHabili;
    errhabili.className = pintoclaseh;

    errhobby.innerHTML = isNokHobby;
    errhobby.className = pintoclaseb;  

    if(!isNokMail && !isNokNombre && !isNokApell && !isNokPass && !isNokConfipass && !isDiferentPass&& !isNokTelef && !isNokHabili &&!isNokHobby){
      console.log(event);
      App.datosForm(event);

    }
  },false);


};
return{
  validacionUsuario: valRegUsuario,
  
}

}; 

})(); 
