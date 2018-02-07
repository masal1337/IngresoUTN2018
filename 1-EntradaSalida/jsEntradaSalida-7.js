/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = document.getElementById("numeroUno").value;
var numero2 = document.getElementById("numeroDos").value;
var resultado;
numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
resultado = numero1 + numero2


alert("La suma es " + resultado);
}

function restar()
{
	var numero1 = document.getElementById("numeroUno").value;
var numero2 = document.getElementById("numeroDos").value;
var resultado;
numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
resultado = numero1 - numero2


alert("La suma es " + resultado);
}

function multiplicar()
{ 
	var numero1 = document.getElementById("numeroUno").value;
var numero2 = document.getElementById("numeroDos").value;
var resultado;
numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
resultado = numero1 * numero2


alert("La suma es " + resultado);
}

function dividir()
{
	var numero1 = document.getElementById("numeroUno").value;
var numero2 = document.getElementById("numeroDos").value;
var resultado;
numero1 = parseInt (numero1);
numero2 = parseInt (numero2);
resultado = numero1 / numero2


alert("La suma es " + resultado);
}

