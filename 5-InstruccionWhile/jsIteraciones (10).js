function Mostrar() {
	/* 1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros.
	6-Cantidad de números pares.
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos) */
	var sumaNeg = 0;
	var sumaPos = 0;
	var contadorNeg = 0;
	var contadorPos = 0;
	var cantCeros = 0;
	var cantPar = 0;
	var promPos;
	var promNeg;
	var diferencia;
	var respuesta = "si";
	var numero;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero < 0) {
			sumaNeg = sumaNeg + numero;
			contadorNeg = contadorNeg + 1;

		}
		else if (numero > 0) {
			sumaPos = sumaPos + numero;
			contadorPos = contadorPos + 1;
		}
		else {

			cantCeros = cantCeros + 1;
		}

		respuesta = prompt("Desea continuar?");

	} while (respuesta == "si");

	promPos = sumaPos / contadorPos;
	promNeg = sumaNeg / contadorNeg;


	if (numero % 2 == 0) {

		cantPar = cantPar + 1;

	}
	diferencia = sumaPos + sumaNeg;

	document.write("El resultado de la suma de negativos es: " + sumaNeg + "<br/>");
	document.write("El resultado de la suma de positivos es: " + sumaPos + "<br/>");
	document.write("La cantidad de negativos es: " + contadorNeg + "<br/>");
	document.write("La cantidad de positivos: " + contadorPos + "<br/>");
	document.write("La cantidad de ceros es: " + cantCeros + "<br/>");
	document.write("La cantidad de numeros pares es: " + cantPar + "<br/>");
	document.write("El promedio de los positivos es: " + promPos + "<br/>");
	document.write("La cantidad de los negativos es: " + promNeg + "<br/>");
	document.write("La diferencia entre positivos y negativos es: " + diferencia + "<br/>");





}//FIN DE LA FUNCIÓN