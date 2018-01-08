// Hay distintas formas de seleccionar un nodo del DOM; aquí obtenemos al formulario
// y al campo del correo, así como el elemento span dentro del cual pondremos el
// mensaje de error.

var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('mail');
var errormail = document.querySelector('.error');
var errorpass = document.querySelector('.errorp');

email.addEventListener("keyup", function (event) {
  if (email.validity.valid) {
    // En caso que haya un mensaje de error visible, si el campo
    // es válido, removemos el mensaje de error.
     
    errormail.innerHTML = ""; // Limpia el contenido del mensaje
    errormail.className = "error"; // Restablece el estado visual del mensaje
  }
}, false);

form.addEventListener("submit", function (event) {
  // Cada vez que el usuario intenta enviar los datos, verificamos
  // si el campo de correo es válido.
  email.setAttribute("required","true");
  if (!email.validity.valid) {
    
    // Si el campo no es válido, mostramos un mensaje de error.
    
    errormail.innerHTML = "¡Yo esperaba una dirección de correo, cariño!";
    errormail.className = "error active";
    alert(errormail.innerHTML);
    // Y prevenimos que el formulario sea enviado, cancelando el evento
    event.preventDefault();
  }
}, false);