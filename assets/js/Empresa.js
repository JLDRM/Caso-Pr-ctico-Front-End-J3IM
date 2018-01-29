//CLASE EMPRESA
//Versión 2 (closure)
var Empresa = (function(){
    function Empresa(nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
        nombre = this.nombre;
        apellido = this.apellido;
        email = this.email;
        contraseña = this.contraseña;
        confirmaciónContraseña = this.ccontraseña;
        empresa = this.empresa;
        nif = this.nif;
        telefono = this.telefono;
        stackTecnológico = this.stack;
    };
    Empresa.prototype = {
        registrarEmpresa: function (nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
            nombre = this.nombre;
            apellido = this.apellido;
            email = this.email;
            contraseña = this.contraseña;
            confirmaciónContraseña = this.ccontraseña;
            empresa = this.empresa;
            nif = this.nif;
            telefono = this.telefono;
            stackTecnológico = this.stack;
        }
    }
    return Empresa;
})();

//Versión 1
/*var Empresa = function Empresa(nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
    nombre = this.nombre;
    apellido = this.apellido;
    email = this.email;
    contraseña = this.contraseña;
    confirmaciónContraseña = this.ccontraseña;
    empresa = this.empresa;
    nif = this.nif;
    telefono = this.telefono;
    stackTecnológico = this.stack;
};
Empresa.prototype.registrarEmpresa = function (nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
    nombre = this.nombre;
    apellido = this.apellido;
    email = this.email;
    contraseña = this.contraseña;
    confirmación_contraseña = this.ccontraseña;
    empresa = this.empresa;
    nif = this.nif;
    telefono = this.telefono;
    stackTecnológico = this.stack;
};*/