// Wait for the DOM to be ready
//$(function() {
// Initialize form validation on the registration form.
// It has the name attribute "registration"
//$("form[name='registration']").validate({
// Specify validation rules
//$(document).ready(function(){
//      $("form").validate({
//   rules: {
// The key name on the left side is the name attribute
// of an input field. Validation rules are defined
// on the right side
//   position: "required",
// jobdescription: "required",
//training: "required",
//location: "required",
//languajes:"required",
//sskills:"required",
//hskills:"required",       
$.validator.addMethod(
  "regex",
  function (value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  },
  "Por favor, introduce datos correctos."
);
$("#bot").click((evnt) => {
  let t = $("form").validate({
    rules: {
      position: {
        required: true
      },
      jobdescription: {
        required: true,
      },
      training: {
        required: true,
      },
      location: {
        required: true,
      },
      languajes: {
        required: true,
      },
      sskills: {
        required: true,
      },
      hskills: {
        required: true,
      },

    },
    // Specify validation error messages
    messages: {
      position: "Porfavor, introduce un título. Carácteres admitidos: letras y números",
      jobdescription: "Porfavor, introduce una job description. Carácteres admitidos: letras y números",
      training: "Porfavor, introduce la formación requerida. Debe empezar en mayuscula, no se aceptan números",
      location: "Porfavor, introduce la ubicación. Debe empezar en mayuscula, no se aceptan números",
      languajes: "Porfavor, introduce los idiomas necesarios seguidos de coma",
      sskills: "Porfavor, introduce las Soft Skills necesarias",
      hskills: "Porfavor, introduce las Hard Skills necesarias",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid

    submitHandler: function (form) {
      event.preventDefault();
      console.log("entra submithandler:", form);
      $.ajax({
        url: "http://www.mocky.io/v2/5a5dcc5c330000a50219190b",
        type: "POST"}).done(
        function () {
          alert('Oferta publicada.');
          form.submit();
        }
        ).fail(function () {
          alert('Los sentimos, se ha producido un error.');
        });
    }
  });
  $("#tituloPosicion").rules("add", { regex: "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$" });
  $("#jobDescription").rules("add", { regex: "^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$" });
  $("#formacion").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
  $("#ubicacion").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
  $("#idiomas").rules("add", { regex: "^[a-zA-Z\,]{2,}$" });
  $("#softSkills").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
  $("#hardSkills").rules("add", { regex: "[a-zA-Z0-9,_]*$" });
  t.form();
});