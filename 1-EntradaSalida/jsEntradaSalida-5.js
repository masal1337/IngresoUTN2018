/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var edad = document.getElementById("laEdad").value;

var nombre = document.getElementById("elNombre").value;

    alert("Usted se llama " + nombre + " y tiene " + edad + " años.");
    
}

