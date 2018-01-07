var titulo = document.getElementById("tituloPosicion");
var descripcion = document.getElementById("jobDescription");
var formacion = document.getElementById("formacion");
var ubicacion = document.getElementById("ubicacion");
var experiencia = document.getElementById("experiencia");
var salario = document.getElementById("salario");
var idiomas = document.getElementById("idiomas");
var Sskills = document.getElementById("softSkills");
var Hskills = document.getElementById("hardSkills");

DatosAltaOferta.prototype.getDatos = function(){
    Ajax("GET", "http://www.mocky.io/v2/5a527dfb2e00000333c03ace", (data) =>{
        
    });
}

function DatosAltaOferta(){
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

