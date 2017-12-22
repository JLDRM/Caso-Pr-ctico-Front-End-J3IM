function ListaLocalesController() {
    this.locales = [];
    this.modalidad = [];
    this.tipoDeLocal = [];
    this.modalidadesFormatter = new ModalidadesFormatter();
}
/*getLocales es la funcion que recogera('GET'=method) la informacion contenida en el
servidor(url) a través de la funcion Ajax, ya que Ajax ejecuta 
los methods open() y el send() en su request:*/
ListaLocalesController.prototype.getLocales = function() {
    Ajax("GET", "http://www.mocky.io/v2/5a3b8e73300000591282d203", (data) => {
        this.locales = data;
    });
}

ListaLocalesController.prototype.getModalidad = function() {
    Ajax("GET", "http://www.mocky.io/v2/5a3b8ca43000007a1082d1fc", (data) => {
        this.modalidad = data;
        this.modalidadesFormatter.modalidades = data;
        this.modalidadesFormatter.ShowAsLi(document.getElementById("modalidadesContainer"));
    });
}
/*Creamos una classe con el argumento pModalidades el cual assignamos como contenido
al atributo modalidades*/
function ModalidadesFormatter(pModalidades) {
    this.modalidades = pModalidades;
}
/*Asignamos una propiedad(ShowAsLi) a la classe ModalidadesFormatter que ejecuta
una function:*/
ModalidadesFormatter.prototype.ShowAsLi = function(container) {
    //Asignamos un string vacio al container
    container.innerHTMl = "";
    //Asignamos un elemento ul a la variable ul
    var ul = document.createElement("ul");
    /*Recorremos un for con arrai modalidades como length:
    en el que cada vuelta creamos un li con el contenido textual(innerText)
    de cada indice de la arrai y lo introducimos dentro(appendChild) del ul*/
    for (let i = 0; i < this.modalidades.length; i++) {
        var li = document.createElement("li");
        li.innerText = this.modalidades[i];
        ul.appendChild(li);
    }
    //ponemos el ul dentro del container
    container.appendChild(ul);
    container.appendChild(ul);
}

function Init() {
    var localesCtrl = new ListaLocalesController();
    localesCtrl.getLocales();
    localesCtrl.getModalidad();
}