//CLASE EMPRESA
var Empresa = (function () {
    function Empresa(nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.emai = email;
        this.contraseña = contraseña;
        this.ccontraseña = ccontraseña;
        this.empresa = empresa;
        this.nif = nif;
        this.telefono = telefono;
        this.stack = stack;
    };
    Empresa.prototype = {
        registrarEmpresa: function (nombre, apellido, email, contraseña, empresa, nif, telefono, stack) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.emai = email;
            this.contraseña = contraseña;
            this.empresa = empresa;
            this.nif = nif;
            this.telefono = telefono;
            this.stack = stack;
        }
    }
    return Empresa;
})();

$('#bot').click(function () {
    $.post("http://www.mocky.io/v2/5a7095fd330000173fff5d5f",
        {
            nombre: document.getElementById("nombre_e").value,
            apellido: document.getElementById("apellido_e").value,
            email: document.getElementById("email_e").value,
            contraseña: document.getElementById("contraseña_e").value,
            empresa: document.getElementById("empresa_e").value,
            nif: document.getElementById("nif_e").value,
            telefono: document.getElementById("telefono_e").value,
            stack: document.getElementById("stack_e").value,
        }, function (data, status) {
            window.location.href = '/altaoferta.html';
        });
    console.log("nombre");
});
