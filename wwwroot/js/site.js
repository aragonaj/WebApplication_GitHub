// obtengo los valores introducidos en los inputs
// los asigno a dos variables 

var texto1 = document.getElementById("input-texto-1").value;
var texto2 = document.getElementById("input-texto-2").value;

var label = document.getElementById("label-solucion");

// creo una función que concatene ambas cadenas
function concatenar() {

    // creo la concatenación 
    var concatenacion = texto1.concat(texto2);

    // imprimo la concatenación en el label
    label.innerHTML = "El resultado concatenado de ambos textos es: " +concatenacion;

    // prueba en consola
    //console.log("El resultado de ambos textos introducidos es: " + concatenacion);
}// fin de la función concatenar

// hago que una vez introducidos ambos textos
// al pulsar el botón cree el resultado concatenado

var boton = document.getElementById("boton-unir");

// le añado un listener para que realice la función concatenar
boton.addEventListener("click", concatenar);

