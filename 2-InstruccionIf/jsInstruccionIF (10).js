function Mostrar() {
	//Genero el número RANDOM entre 1 y 10 

	var numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom > 8) {

		alert(numeroRandom + " ¡Excelente!");
	}

	else if (numeroRandom >= 4) {

		alert(numeroRandom + " ¡Aprobò!");
	}

	else {

		alert(numeroRandom + " ¡Vamos, la proxima se puede!");

	}

}//FIN DE LA FUNCIÓN