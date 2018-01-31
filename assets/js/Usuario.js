var ListaUsuariosController = (function () {
    // Constructor
    function LUController() {
        this.usuarios = [];
    }
    // Methods
    LUController.prototype = {
        getUsuarios: function () {
            Ajax("GET", "http://www.mocky.io/v2/5a7190212f000035127762e5", (data) => {
                this.usuarios = data;
                var renderizar = new Renderer('./assets/templates/perfilUsuario.hbs', this.usuarios, 'section');
                console.log(renderizar.render)
                renderizar.render();
            });
        }
    }
    return LUController;
})();

// Init: Perfil Usuario
var perfilUsuario = (function () {
    var usuariosCtrl = new ListaUsuariosController();
    usuariosCtrl.getUsuarios();
})();