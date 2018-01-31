// PROTOTIPO USUARIO GEEK
var Usuario = (function () {
    // Constructor
    function User(nom, cognom, foto, desc, habP, hab, port, exp, form, correu, pass, tel, hob) {
        this.nombre = nom;
        this.apellidos = cognom;
        this.fotoPerfil = foto;
        this.descripcion = desc;
        this.habilidadesPrincipales = habP;
        this.habilidades = hab;
        this.portafolio = port;
        this.experiencia = exp;
        this.formacion = form;
        this.email = correu;
        this.password = pass;
        this.telefono = tel;
        this.hobby = hob;
    }

    return User;
})();

// PROTOTIPO USUARIO EMPRESA
export var Empresa = (function () {
    // Constructor
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
    // Methods
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