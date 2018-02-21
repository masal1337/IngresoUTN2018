function Mostrar() {


	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';
	var flag = 0;
	do {
		numero = parseInt(prompt("Digite un numero :"));

		if (numero >= 0) {
			positivo += numero;

		}
		else {

			negativo = numero * negativo;
			flag = 1;

		}
		respuesta = prompt("Desea continuar?: ")
	} while (respuesta == "si");


	document.getElementById('suma').value = positivo;
	if (flag = 1) {

		negativo = 0;

	}
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN