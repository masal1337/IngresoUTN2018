/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var numero1 = document.getElementById("sueldo").value;
var numero2;
var resultado
var resultadoFinal;
numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
resultado = numero1 * 10 / 100;

resultadoFinal = resultado + numero1
document.getElementById("resultado").value = ("Su sueldo es de " + resultadoFinal);
}
