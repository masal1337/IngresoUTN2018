/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var radio = document.getElementById("Radio").value;
    var suma = largo + ancho;
    var resultadoNeto = suma * 2;
    var resultadoFinal = resultadoNeto * 3;
    alert("Tu rectangulo de alambre es de " + resultadoFinal + "M.");
}
function Circulo() {
    
    var radio = parseFloat(parseInt(document.getElementById("Radio").value));
    var resultadoNeto = 2 * radio * Math.PI;
    var resultadoFinal = resultadoNeto * 3;
    alert("Tu circulo de alambre es de " + resultadoFinal.toFixed(2) + "M.");


}
function Materiales() {
    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
   
    var suma = largo * ancho;
    var resultadoNeto = suma * 2;
    var resultadoFinal = resultadoNeto * 2 * 3;
    alert("Tu rectangulo de alambre es de " + resultadoFinal + "M.");

}