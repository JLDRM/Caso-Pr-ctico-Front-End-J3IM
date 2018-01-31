var App = (function(){

	function getFromFormUsuario(eventoSubmit){
		dataForm=eventoSubmit.target.getElementsByTagName('input');
		var datosUsuario ={};
		for (var i = 0; i < dataForm.length; i++) {
			datosUsuario[dataForm[i].name] = dataForm[i].value;
		};
		console.log(datosUsuario);
		Geek.crearGeek(datosUsuario);
	}

	return {
		datosForm:getFromFormUsuario
	};

})();

