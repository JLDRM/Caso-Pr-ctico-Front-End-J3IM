var nombre = document.getElementById("idnombre");
var apellido = document.getElementById("idapellido");
var email = document.getElementById("idemail");
var password = document.getElementById("idcontraseña");
var empresa = document.getElementById("idempresa");
var nif = document.getElementById("idnif");
var telefono = document.getElementById("idtel");


nombre.addEventListener("input", function(event){
    if(nombre.validity.patternMismatch){
        nombre.setCustomValidity("Por favor, introduce la primera letra en mayúscula");
    }else{
        nombre.setCustomValidity("");
    }
});
apellido.addEventListener("input", function(event){
    if(apellido.validity.patternMismatch){
        apellido.setCustomValidity("Por favor, introduce la primera letra en mayúscula");
    }else{
        apellido.setCustomValidity("");
    }
});
email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Por favor, introduce un email correcto");
    }else{
        email.setCustomValidity("");
    }
});
password.addEventListener("input", function(event){
    if(password.validity.tooLong){
        password.setCustomValidity("Introduce entre 8 y 12 carácteres");
    }else{
        password.setCustomValidity("");
    }
});
//Verificar nombre empresa??
//Formato del NIF!!!! y verificación (qué patrón sigue???)
telefono.addEventListener("input", function(event){
    if(telefono.validity.typeMismatch){
        telefono.setCustomValidity("Introduce un número de teléfono correcto");
    }else{
        telefono.setCustomValidity("");
    }
});
//No aplica la maxlength investigar error
telefono.addEventListener("input", function(event){
    if(telefono.validity.tooLong){
        telefono.setCustomValidity("El número introducido no es correcto");
    }else{
        telefono.setCustomValidity("");
    }
});

//POST
//El NIF y el teléfono los declaro como array????
function DatosEmpresa(){
    this.nombre = "";
    this.apellido = "";
    this.email = "";
    this.contraseña = "";
    this.empresa = "";
    this.nif = [];
    this.telefono = [];
    this.stack_tecno = [];
}
DatosEmpresa.prototype.getDatos = function(){
    Ajax("GET", "http://www.mocky.io/v2/5a4ba0cb300000ed11a696d6", (data) =>{
        
    });
}