/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var numero1 = document.getElementById("sueldo").value;
var numero2 = document.getElementById("sueldo").value;
var resultado;
numero1 = parseInt (numero1);

resultado = numero1 + 10 * 100
numero2 = resultado

alert("Su sueldo es de " + resultado);
}
