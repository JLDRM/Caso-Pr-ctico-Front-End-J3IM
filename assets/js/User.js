// CLASE USUARIO GEEK

// Version 2 con closure
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
    };
    // Métodos
    User.prototype = {
        registrarUsuario: function (nom, cognom, correu, pass, tel, hab, hob) {
            this.nombre = nom;
            this.apellidos = cognom;
            this.email = correu;
            this.password = pass;
            this.telefono = tel;
            this.habilidades = hab;
            this.hobby = hob;
        }
    }
    return User;
})();

// Version 1 sin closure
/*
var Usuario = function Usuario(nom, cognom, foto, desc, habP, hab, port, exp, form, correu, pass, tel, hob) {
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
};

Usuario.prototype.registrarUsuario = function (nom, cognom, correu, pass, tel, hab, hob) {
    this.nombre = nom;
    this.apellidos = cognom;
    this.email = correu;
    this.password = pass;
    this.telefono = tel;
    this.habilidades = hab;
    this.hobby = hob;
}*/