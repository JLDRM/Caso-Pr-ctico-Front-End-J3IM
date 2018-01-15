/*var nombre = document.getElementById("idnombre");
var apellido = document.getElementById("idapellido");
var email = document.getElementById("idemail");
var password = document.getElementById("idcontraseña");
var empresa = document.getElementById("idempresa");
var nif = document.getElementById("idnif");
var telefono = document.getElementById("idtel");
var stack_tecno = document.getElementById("idtecno");
var seguridad = document.getElementById("idseguridad");

var isOk = true;

function validarFormulario() {
    nombre.addEventListener("keydown", function (event) {
        if (nombre.validity.patternMismatch) {
            nombre.setCustomValidity("Por favor, introduce la primera letra en mayúscula");
            isOk = false;
        } else {
            nombre.setCustomValidity("");
        }
    });
    apellido.addEventListener("keydown", function (event) {
        if (apellido.validity.patternMismatch) {
            apellido.setCustomValidity("Por favor, introduce la primera letra en mayúscula");
            isOk = false;
        } else {
            apellido.setCustomValidity("");
        }
    });
    email.addEventListener("keydown", function (event) {
        if (email.validity.patternMismatch) {
            email.setCustomValidity("Por favor, introduce un email correcto");
            isOk = false;
        } else {
            email.setCustomValidity("");
        }
    });
    password.addEventListener("keydown", function (event) {
        if (password.validity.patternMismatch) {
            password.setCustomValidity("Introduce un password con letras mayúsculas y minúsculas, números y símbolos");
            isOk = false;
        } else {
            password.setCustomValidity("");
        }
    });
    nif.addEventListener("keydown", function (event) {
        if (nif.validity.patternMismatch) {
            nif.setCustomValidity("Por favor, introduce un NIF correcto");
            isOk = false;
        } else {
            nif.setCustomValidity("");
        }
    });

    telefono.addEventListener("keydown", function (event) {
        if (telefono.validity.patternMismatch) {
            telefono.setCustomValidity("Introduce un número de teléfono correcto");
            isOk = false;
        } else {
            telefono.setCustomValidity("");
        }
    });

}
validarFormulario();

//GET

function DatosEmpresa() {
    this.nombre = "";
    this.apellido = "";
    this.email = "";
    this.password = "";
    this.empresa = "";
    this.nif = [];
    this.telefono = [];
    this.stack_tecno = [];
    this.seguridad = "";
}
DatosEmpresa.prototype.getDatos = function (onSuccess) {
    Ajax("GET", "http://www.mocky.io/v2/5a54a81e2d000026225b1cb3", (data) => {
        this.nombre = data["Nombre"];
        this.apellido = data["Apellido"];
        this.email = data["Email"];
        this.password = data["Contraseña"];
        this.empresa = data["Empresa"];
        this.nif = data["NIF"];
        this.telefono = data["Telefono"];
        this.stack_tecno = data["Stack tecnologico"];
        this.seguridad = data["Seguridad"]
        onSuccess(this);
    });
}

function muestraDatos(datos) {
    nombre.value = datos.nombre;
    apellido.value = datos.apellido;
    email.value = datos.email;
    password.value = datos.contraseña;
    empresa.value = datos.empresa;
    nif.value = datos.nif;
    telefono.value = datos.telefono;
    stack_tecno.value = datos.stack_tecno;

}
var datos = new DatosEmpresa();
datos.getDatos(muestraDatos);


function PostDatos() {
    var url = "http://www.mocky.io/v2/5a54c77e2d0000f02a5b1d52";
    var request = new XMLHttpRequest();

    request.open("POST", url);
    request.onload = function () {
        if (request.status == 200) {
            console.log(request);
            location.href = request.response;
        }
    };
    request.send();
}

document.getElementById("bot").onclick = function (evnt) {
    evnt.preventDefault();
    console.log(isOk);
    if(isOk && document.getElementById("idreg").checked){
        PostDatos()
    }
};*/

/*$.validator.addMethod('regex',
function(value,element,regexp){
    return regexp.test(value);
},
"Por favor, introduce datos correctos."
);*/
$(document).ready(function () {
    $("form").validate({
        rules: {
            nombre: {
                required: true,
                //regexp:/^[a-zA-Z]+$/,
            },
            apellido: {
                required: true,
                //regexp: /^[a-zA-Z]+$/,
            },
            email: {
                required: true,
                //regexp: /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/,
            },
            contraseña: {
                required: true,
                regexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/,
                minlength: 6,
                maxlength: 8
            },
            empresa: {
                required: true,
            },
            nif: {
                required: true,
               // regexp: ,
            },
            telefono: {
                required: true,
                //regexp: /^[0-9-()+]{8}$/,
            },
            idreg: {
                required: true,
            }
        },
        messages: {
            nombre: "Por favor, introduce tu nombre.",
            apellido: "Por favor, introduce tu apellido.",
            email: "Por favor, introduce tu email.",
            contraseña: "Por favor, introduce una contraseña.",
            empresa: "Este campo es obligatorio.",
            nif: "Este campo es obligatorio.",
            telefono: "Este campo es obligatorio.",
            idreg: "Este campo es obligatorio.",
        },
        submitHandler: function (form) {
            form.submit();
           /* $.ajax({
                type: 'POST',
                url: '',
                data: dataType,
                success: function (response) {

                }
            });*/
            //event.preventDefault();
        }
    });
});
