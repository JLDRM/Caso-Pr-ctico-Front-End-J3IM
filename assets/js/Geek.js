var Geek = (function () {
	var Usuario = (function () {
		// Constructor
		function User(nom, cognom, foto, desc, habP, hab, port, exp, form, correu, pass, tel, hob) {
			this.nombre = nom;
			this.apellidos = cognom;
			this.fotoPerfil = foto;
			this.descripcion = desc;
			this.habilidadesPrincipales = habP;
			this.habilidades = hab;
			this.portafolio = port;
			this.experiencia = exp;
			this.formacion = form;
			this.email = correu;
			this.password = pass;
			this.telefono = tel;
			this.hobby = hob;
		}

		return User;
	})();

	function crearUsuarioNuevo(ObjetoUsuario) {
		var usuarioNuevo = new Usuario(ObjetoUsuario.nombre, ObjetoUsuario.apellido, "", "", "", ObjetoUsuario.habilidad, "", "", "", ObjetoUsuario.mail, ObjetoUsuario.contraseña, ObjetoUsuario.telefono, ObjetoUsuario.hobby);
		console.log(usuarioNuevo);
		enviarUsuarioMongo(usuarioNuevo);

	};

	function enviarUsuarioMongo(newUser) {
		var data = stringify(newUser);
		$.ajax({
			url: 'https://www.evstest.com/G3v1LastVersion/portal/portal_action.php',
			data: data,
			method: 'get',
			dataType: 'json',
			success: function (response) {
				console.log(response);
				location.href = response;
			},
			error: function (error) {
				alert(newUser);
			}
		})
	};

	function getUsuarios() {
		Ajax("GET", "http://www.mocky.io/v2/5a7190212f000035127762e5", (data) => {
			this.usuarios = data;
			var renderizar = new Renderer('./assets/templates/perfilUsuario.hbs', this.usuarios, 'section');
			//console.log(renderizar.render)
			renderizar.render();
		});
	}

	return {
		usuario: Usuario,
		crearGeek: crearUsuarioNuevo,
		subirServidor: enviarUsuarioMongo,
		getUsuarios: getUsuarios
	}

})();