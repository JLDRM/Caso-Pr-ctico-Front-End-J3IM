var App = (function () {
	function loadValidacion() {
		window.onload = () => {
			Validacion.validacionUsuario();
			Validacion.ValidarFormEmpresa();
		}
	}

	function getFromFormUsuario(eventoSubmit) {
		dataForm = eventoSubmit.target.getElementsByTagName('input');
		var datosUsuario = {};
		for (var i = 0; i < dataForm.length; i++) {
			datosUsuario[dataForm[i].name] = dataForm[i].value;
		};
		console.log(datosUsuario);
		Geek.crearGeek(datosUsuario);
	}

	function getFromFormEmpresa(event) {
		dataFormEmpresa = event;
		var datosEmpresa = {};
		for (var i = 0; i < dataFormEmpresa.length; i++) {
			datosEmpresa[dataFormEmpresa[i].name] = dataFormEmpresa[i].value;
		};
		console.log(datosEmpresa);
		EmpresaGeek.crearEmpresaGeek(datosEmpresa);
	}

	return {
		cargaValidacion: loadValidacion(),
		datosForm: getFromFormUsuario,
		datosFormEmpresa: getFromFormEmpresa
	};

})();