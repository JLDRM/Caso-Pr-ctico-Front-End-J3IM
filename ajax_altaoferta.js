function Ajax(method, url, onSuccess){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            onSuccess(JSON.parse(this.responseText));
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}