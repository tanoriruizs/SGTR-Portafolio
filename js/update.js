
var derechosDeAutor = document.getElementById('derechos-de-autor');


var añoActual = new Date().getFullYear();


var contenido = 'Creado por SGTR (' + añoActual + ') &copy;';

derechosDeAutor.innerHTML = contenido;
