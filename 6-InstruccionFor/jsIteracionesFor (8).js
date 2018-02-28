function Mostrar() {

    var numero;
    var esPrimo = true;
    var i;

    numero = parseInt(prompt("Ingrese numeros y encuentro los divisores"));

    for (i = 2; i < numero; i++) {

        if (numero % i == 0) {

            esPrimo = false;
            break;

        }

    }

    if (esPrimo) {

        alert(numero + " es primo");
    } else {

        alert(numero + " no es primo")

    }
}//FIN DE LA FUNCIÓN