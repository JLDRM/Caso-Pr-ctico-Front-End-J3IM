var EmpresaGeek = (function () {
    var Empresa = (function () {
        function Company(nombre, apellido, email, contraseña, ccontraseña, empresa, nif, telefono, stack) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.emai = email;
            this.contraseña = contraseña;
            this.ccontraseña = ccontraseña;
            this.empresa = empresa;
            this.nif = nif;
            this.telefono = telefono;
            this.stack = stack;
        }
        return Company;
    })();
 
    function crearEmpresaNueva(ObjetoEmpresa) {
        var empresaNueva = new Empresa(ObjetoEmpresa.nombre, ObjetoEmpresa.apellido, ObjetoEmpresa.email,
            ObjetoEmpresa.contraseña, ObjetoEmpresa.empresa, ObjetoEmpresa.nif, ObjetoEmpresa.telefono,
            ObjetoEmpresa.stack);
        console.log(empresaNueva);
        enviarEmpresaMongo(empresaNueva);
 
    };
 
    function enviarEmpresaMongo(newEmpresa){
        window.location.href = './altaoferta.html';
    };
    
    return{
        empresa: Empresa,
        crearEmpresaGeek: crearEmpresaNueva,
        subirAServidor: enviarEmpresaMongo
    }
 
    
    })();