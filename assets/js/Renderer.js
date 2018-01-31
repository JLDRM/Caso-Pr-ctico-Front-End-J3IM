var Renderer = (function () {
    // Constructor
    function Render(rutaPlantilla, Datos, Selector) {
        this.plantilla = rutaPlantilla;
        this.plantillaCompilada = "";
        this.datos = Datos;
        this.selector = Selector;
    }
    // Methods
    Render.prototype = {
        render: function () {
            let plantilla = this.plantilla;
            let datos = this.datos;
            let selector = this.selector;

            $.get(plantilla, function (laplantilla) {
                this.plantillaCompilada = Handlebars.compile(laplantilla);
                //console.log('Entra get', this.plantillaCompilada, datos)
                $(selector).append(this.plantillaCompilada(datos));
            }, 'html').fail(function (e) {
                console.log('No se ha podido realizar el GET', e);
            });
        }
    }
    return Render;
})();