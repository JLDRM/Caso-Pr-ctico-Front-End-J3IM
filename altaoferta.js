var titulo = document.getElementById("tituloPosicion");
var descripcion = document.getElementById("jobDescription");
var formacion = document.getElementById("formacion");
var ubicacion = document.getElementById("ubicacion");
var experiencia = document.getElementById("experiencia");
var salario = document.getElementById("salario");
var idiomas = document.getElementById("idiomas");
var Sskills = document.getElementById("softSkills");
var Hskills = document.getElementById("hardSkills");
var error = document.querySelector('.error');
var form = document.getElementsByTagName('form')[0];



// Tot això és per obtenir la info del "servidor" i mostrarla

DatosAltaOferta.prototype.getDatos = function (onSuccess) {
    Ajax("GET", "http://www.mocky.io/v2/5a5356fb300000d91d1ebec8", () => {
        this.titulo = data["Título de la oferta"];
        this.descripcion = data["Descripción de la oferta"];
        this.formacion = data["Formción"];
        this.ubicacion = data["Ubicación"];
        this.experiencia = data["Años de experiencia"];
        this.salario = data["Salario"];
        this.idiomas = data["Idiomas"];
        this.Sskills = data["Soft Skills"];
        this.Hskills = data["Hard Skills"];
        onSuccess(this);
    });
}

function DatosAltaOferta() {
    this.titulo = "";
    this.descripcion = "";
    this.formacion = "";
    this.ubicacion = "";
    this.experiencia = "";
    this.salario = "";
    this.idiomas = [];
    this.Sskills = [];
    this.Hskills = [];
}

DatosAltaOferta.prototype.getDatos = function (onSuccess) {
    Ajax("GET", "http://www.mocky.io/v2/5a537839300000e2261ebf75", (data) => {
        this.titulo = data["Título de la oferta"];
        this.descripcion = data["Descripción de la oferta"];
        this.formacion = data["Formción"];
        this.ubicacion = data["Ubicación"];
        this.experiencia = data["Años de experiencia"];
        this.salario = data["Salario"];
        this.idiomas = data["Idiomas"];
        this.Sskills = data["Soft Skills"];
        this.Hskills = data["Hard Skills"];
        onSuccess(this);
    });
}

function PintaDatos(objAPintar) {
    titulo.value = objAPintar.titulo;
    descripcion.value = objAPintar.descripcion;
    formacion.value = objAPintar.formacion;
    ubicacion.value = objAPintar.ubicacion;
    experiencia.value = objAPintar.experiencia;
    salario.value = objAPintar.salario;
    idiomas.value = objAPintar.idiomas;
    Sskills.value = objAPintar.Sskills;
    Hskills.value = objAPintar.Hskills;
}

var datos = new DatosAltaOferta();
datos.getDatos(PintaDatos);

//Validació del formulari
var isOk=true;
function ValidaForm() {
    titulo.addEventListener("keydown", function (event) {
        if (titulo.validity.patternMismatch) {
            titulo.setCustomValidity("Solo se aceptan letras y números");
            isOk=false;
        }
        else {
            titulo.setCustomValidity("");
        }

        console.log(isOk)
    });

    descripcion.addEventListener("keydown", function (event) {
        if (descripcion.validity.patternMismatch) {
            descripcion.setCustomValidity("Solo se aceptan letras y números");
            isOk=false;
        }
        else {
            descripcion.setCustomValidity("");
        }
    });

    formacion.addEventListener("keydown", function (event) {
        if (formacion.validity.patternMismatch) {
            formacion.setCustomValidity("Solo se aceptan letras");
            isOk=false;
        }
        else {
            formacion.setCustomValidity("");
        }
    });

    ubicacion.addEventListener("keydown", function (event) {
        if (ubicacion.validity.patternMismatch) {
            ubicacion.setCustomValidity("Solo se aceptan letras");
            isOk=false;
        }
        else {
            ubicacion.setCustomValidity("");
        }
    });

    idiomas.addEventListener("keydown", function (event) {
        if (idiomas.validity.patternMismatch) {
            idiomas.setCustomValidity("Solo se aceptan letras");
            isOk=false;
        }
        else {
            idiomas.setCustomValidity("");
        }
    });
    Hskills.addEventListener("keydown", function (event) {
        if (Hskills.validity.patternMismatch) {
            Hskills.setCustomValidity("Solo se aceptan letras y números");
            isOk=false;
        }
        else {
            Hskills.setCustomValidity("");
        }
    });

    Sskills.addEventListener("keydown", function (event) {
        if (Sskills.validity.patternMismatch) {
            Sskills.setCustomValidity("Solo se aceptan letras");
            isOk=false;
        }
        else {
            Sskills.setCustomValidity("");
        }
    });

}

ValidaForm();

function MockyPost() {
    var url = "http://www.mocky.io/v2/5a54c0d72d0000de285b1d39";
    var request = new XMLHttpRequest();

    request.open("POST", url);
    request.onload = function () {
        if (request.status == 200) {
            location.href = request.response;
        }
    };
    request.send();
}

document.getElementById("enviar").onclick = function (evnt) {
    evnt.preventDefault();
    //alert(isOk);
    if(isOk) MockyPost()
};

