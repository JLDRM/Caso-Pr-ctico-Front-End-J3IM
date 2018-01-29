//CLASE EMPRESA
//Versión 2 (closure)
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
        registrarEmpresa: function (nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.emai = email;
            this.contraseña = contraseña;
            this.ccontraseña = ccontraseña;
            this.empresa = empresa;
            this.nif = nif;
            this.telefono = telefono;
            this.stack = stack;
        }
    }
    return Empresa;
})();

//Versión 1
/*var Empresa = function Empresa(nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
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
Empresa.prototype.registrarEmpresa = function (nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.emai = email;
    this.contraseña = contraseña;
    this.ccontraseña = ccontraseña;
    this.empresa = empresa;
    this.nif = nif;
    this.telefono = telefono;
    this.stack = stack;
};*/