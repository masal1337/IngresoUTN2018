//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
 var largo = parseFloat((document.getElementById("largo").value));
var ancho = parseFloat((document.getElementById("ancho").value));
var perimetro = (largo + ancho) * 2;
var alambre = perimetro * 6;

alert ("La cantidad de metros de metros de alambre que se necesita es de " + alambre.toFixed(2));


}

