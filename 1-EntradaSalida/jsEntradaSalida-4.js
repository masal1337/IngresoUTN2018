/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	//Declaro variable de nombre y uso prompt para usar su acciòn
var nombre = prompt("Ingrese su nombre: ")

//Realizo lo mismo que el eje 3 pero al revès
document.getElementById("elNombre").value = nombre;
}

