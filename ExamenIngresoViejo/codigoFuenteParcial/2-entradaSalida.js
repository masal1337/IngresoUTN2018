//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeP = parseInt( prompt ("Ingrese el precio del producto: "));
    var importeFinal;

    importeFinal = importeP * 1.21;

    document.getElementById("importe").value = ("Tu importe final + IVA es de " + importeFinal);
}

