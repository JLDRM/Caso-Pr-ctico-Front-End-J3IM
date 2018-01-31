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

var AppEmpr = (function(){
	
		function getFromFormEmpresa(event){
			dataFormEmpresa=event.target.getElementsByTagName('input');
			var datosEmpresa ={};
			for (var i = 0; i < dataFormEmpresa.length; i++) {
				datosEmpresa[dataFormEmpresa[i].name] = dataFormEmpresa[i].value;
			};
			console.log(datosEmpresa);
			EmpresaGeek.crearEmpresaGeek(datosEmpresa);
		}
	
		return {
			datosFormEmpresa:getFromFormEmpresa
		};
	
	})();
