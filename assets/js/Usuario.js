class ListaUsuariosController {
    constructor() {
        this.usuarios = [];
        this.modalidad = [];
        this.usuariosFormatter = new UsuariosFormatter();
    }
    getUsuarios() {
        Ajax("GET", "http://www.mocky.io/v2/5a534e5f300000271c1ebe8f", (data) => {
            this.usuarios = data;
            this.usuariosFormatter.usuarios = data;
            this.usuariosFormatter.ShowUsuario(document.getElementById("perfil"));
        });
    }
    // Setter
    setLocales(data) {
        this.locales = data;
    }
}

class UsuariosFormatter {
    constructor(usuarios) {
        this.usuarios = usuarios;
    }
    ShowUsuario(container) {
        container.innerHTMl = "";

        let img = document.getElementById("fotoPerfil");
        img.style.backgroundImage = "url('" + this.usuarios[0].fotoPerfil + "')";

        let nombreApellidos = document.getElementById("nombre");
        nombreApellidos.innerText = this.usuarios[0].nombre + " " + this.usuarios[0].apellidos;

        let descripcion = document.getElementById("desc");
        descripcion.innerHTML = "<p>" + this.usuarios[0].descripcion + "</p>";

        let habilidadesPrincipales = document.getElementById("habP");
        habilidadesPrincipales.innerHTML = "<div class='card-body mm'><ul>" + "<li><a class='b' href='#'>" + this.usuarios[0].habilidadesPrincipales[0] + "</a></li>" + "<li><a class='b' href='#'>" + this.usuarios[0].habilidadesPrincipales[1] + "</a></li>" + "</ul></div>";

        let habilidades = document.getElementById("hab");
        habilidades.innerHTML = "<p>" + this.usuarios[0].habilidades + "</p>";

        let portafolio = document.getElementById("por");
        portafolio.innerHTML = "<p>" + this.usuarios[0].portafolio + "</p>";

        let experiencia = document.getElementById("exp");
        experiencia.innerHTML = "<p>" + this.usuarios[0].experiencia + "</p>";

        let formacion = document.getElementById("for");
        formacion.innerHTML = "<p>" + this.usuarios[0].formacion + "</p>";

        // console.log(this.usuarios[0].nombre); // Comprobar que llega la informacion a la función
    }
}
class UsuarioGeek {
    constructor(nombre, apellidos, fotoPerfil, descripcion, habilidadesPrincipales, habilidades, portafolio, experiencia, formacion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fotoPerfil = fotoPerfil;
        this.descripcion = descripcion;
        this.habilidadesPrincipales = habilidadesPrincipales; // Array
        this.habilidades = habilidades;
        this.portafolio = portafolio;
        this.experiencia = experiencia;
        this.formacion = formacion;
    }

    mostrarUsuario() {
        console.log(this.nombre, this.apellidos, this.fotoPerfil);
    }


}

// Closure que se ejecuta al cargar la página: Perfil Usuario
var perfilUsuario = (function () {
    var usuariosCtrl = new ListaUsuariosController();
    usuariosCtrl.getUsuarios();
})();