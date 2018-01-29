//CLASE EMPRESA
//Versión 2 (closure)
var Empresa = (function(){
    function Empresa(nombre, apellido, email, contraseña, confirm_contraseña, empresa, nif, telfn, stack) {
        nombre = this.nombre;
        apellido = this.apellido;
        email = this.email;
        contraseña = this.contraseña;
        confirmación_contraseña = this.confirm_contraseña;
        empresa = this.empresa;
        nif = this.nif;
        telefono = this.telfn;
        stack_Tecnológico = this.stack;
    };
    Empresa.prototype = {
        registrarEmpresa: function (nombre, apellido, email, contraseña, confirm_contraseña, empresa, nif, telfn, stack) {
            nombre = this.nombre;
            apellido = this.apellido;
            email = this.email;
            contraseña = this.contraseña;
            confirmación_contraseña = this.confirm_contraseña;
            empresa = this.empresa;
            nif = this.nif;
            telefono = this.telfn;
            stack_Tecnológico = this.stack;
        }
    }
    return Empresa;
})();

//Versión 1
/*var Empresa = function Empresa(nombre, apellido, email, contraseña, confirm_contraseña, empresa, nif, telfn, stack) {
    nombre = this.nombre;
    apellido = this.apellido;
    email = this.email;
    contraseña = this.contraseña;
    confirmación_contraseña = this.confirm_contraseña;
    empresa = this.empresa;
    nif = this.nif;
    telefono = this.telfn;
    stack_Tecnológico = this.stack;
};
Empresa.prototype.registrarEmpresa = function (nombre, apellido, email, contraseña, confirm_contraseña, empresa, nif, telfn, stack) {
    nombre = this.nombre;
    apellido = this.apellido;
    email = this.email;
    contraseña = this.contraseña;
    confirmación_contraseña = this.confirm_contraseña;
    empresa = this.empresa;
    nif = this.nif;
    telefono = this.telfn;
    stack_Tecnológico = this.stack;
};*/