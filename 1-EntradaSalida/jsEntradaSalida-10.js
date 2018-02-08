/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var numero1 = parseFloat (document.getElementById("importe").value);

var resultado;
var resultado2;
var resultado3;

resultado = 25 * numero1;
resultado2 = resultado / 100;
resultado3 = numero1 - resultado2;

document.getElementById("resultado").value = ("Su descuento es de " + resultado3.toFixed(2));
}
