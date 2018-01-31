var valRegEmpresa = (function ValidarFormEmpresa() {
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Por favor, introduce datos correctos."
    );
    //Validación registro empresa
    $("#bot").click(function (evnt) {
        // evnt.preventDefault();
        let t = $("form").validate({
            rules: {
                nombre: {
                    required: true
                },
                apellido: {
                    required: true,
                },
                email: {
                    required: true,
                },
                contraseña: {
                    required: true,
                },
                ccontraseña: {
                    required: true,
                    equalTo: "#contraseña_e"
                },
                empresa: {
                    required: true,
                },
                nif: {
                    required: true,
                },
                telefono: {
                    required: true,
                },
                idreg: {
                    required: true,
                }
            },
            messages: {
                nombre: "Por favor, introduce la primera letra en mayúscula.",
                apellido: "Por favor, introduce la primera letra en mayúscula.",
                email: "Por favor, introduce un email correcto.",
                contraseña: "Por favor, introduce una contraseña de seis dígitos, que contenga al menos una letra mayúscula, una minúscula, un número y un carácter.",
                ccontraseña: "Por favor, introduce la confirmación de la contraseña.",
                empresa: "Por favor, introduce el nombre de tu empresa.",
                nif: "Por favor, introduce el NIF de tu empresa.",
                telefono: "Por favor, introduce un número de teléfono.",
                idreg: "Este campo es obligatorio.",
            },
            submitHandler: function (form) {
                event.preventDefault();
                console.log("entra submithandler:", form)
                var datosFormEmpresa = form.getElementsByTagName("input");
                console.log(datosFormEmpresa);
                App.datosFormEmpresa(datosFormEmpresa);

                /*jQuery.ajax({
                    url: "http://www.mocky.io/v2/5a5dcdac330000510c19190f",
                    type: "POST"
                }).done(
                    function () {
                        alert('Registrado correctamente.');
                        form.submit();
                    }
                    ).fail(function () {
                        alert('Los sentimos, se ha producido un error.');
                    });*/

            }
        });

        $("#nombre_e").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
        $("#apellido_e").rules("add", { regex: "^[A-Z ÁÉÍÓÚ][a-z áéíóú]+$" });
        $("#email_e").rules("add", { regex: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" });
        $("#contraseña_e").rules("add", { regex: "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$" });
        $("#nif_e").rules("add", { regex: "^[A-Za-z][0-9]{8}$" });
        $("#telefono_e").rules("add", { regex: "^[0-9]{9}$" });

        t.form();
    });

    return ValidarFormEmpresa;
})();

//Validación alta oferta
var valRegOferta = (function ValidarFormAltaOferta() {
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Por favor, introduce datos correctos."
    );
    //Validación alta oferta
    $("#bott").click((evnt) => {
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
                var datosAltaOferta = form.getElementsByTagName("input");
                console.log(datosAltaOferta);
                App.datosAltaOferta(datosAlta);
                /*$.ajax({
                    url: "http://www.mocky.io/v2/5a5dcc5c330000a50219190b",
                    type: "POST"
                }).done(
                    function () {
                        alert('Oferta publicada.');
                        form.submit();
                    }
                    ).fail(function () {
                        alert('Los sentimos, se ha producido un error.');
                    });*/
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
});
