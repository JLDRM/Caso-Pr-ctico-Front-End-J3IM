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
$.validator.addMethod(
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Por favor, introduce datos correctos."
);
$("#bot").click((evnt)=>{
    evnt.preventDefault();
    let t = $("form").validate({
        rules: {            
            nombre: {
                required: true
            },
            apellido: {
                required: true,
            },
            email: {
                required: true,
            },
            contraseña: {
                required: true,
            },
            empresa: {
                required: true,
            },
            nif: {
                required: true,
            },
            telefono: {
                required: true,
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
            empresa: "Por favor, introduce el nombre de tu empresa.",
            nif: "Por favor, introduce el NIF de tu empresa.",
            telefono: "Por favor, introduce un número de teléfono.",
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
    $("#nombre").rules("add", { regex: "^[a-zA-Z]+$"});
    $("#apellido").rules("add", { regex: "^[a-zA-Z]+$"});
    $("#email").rules("add", { regex: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"});
    $("#contraseña").rules("add", { regex: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$"});
    $("#nif").rules("add", { regex: "^[A-Za-z][0-9]{8}$"});
    $("#telefono").rules("add", { regex: "^(\+34|0034|34)?[6|7|9][0-9]{8}$"});
    t.form();
});

