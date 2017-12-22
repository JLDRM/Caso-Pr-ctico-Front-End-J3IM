//Si crido a la funcio Ajax amb els arguments(...)
function Ajax(method, url, onSuccess) {
//Creo un objecte de la classe XMLHttpRequest y l'anomeno xhttp...
    var xhttp = new XMLHttpRequest();
//Aquest Objecte(xhttp) li ejecuto la funció onreadystatechange:
    xhttp.onreadystatechange = function() {
/*Condicions: Si la property readyState es igual a 4=request finished and response 
is ready, y(&&) status 200=OK, s'executa la funcio onSucces.
y */
        if (this.readyState == 4 && this.status == 200) {
        	//responseText=get the response data as a string.
            onSuccess(JSON.parse(this.responseText));
        }
    };

    xhttp.open(method, url, true);
    xhttp.send();
}