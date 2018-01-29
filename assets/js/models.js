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