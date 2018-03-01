//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var numero1 = parseFloat(prompt("Ingrese un numero: "));
    var numero2 = parseFloat(prompt("Ingrese un numero: "));
    var resultado;

    if (numero1 == numero2) {

        resultado = numero1 * numero2;


    }
    else if (numero1 > numero2) {

        resultado = numero1 - numero2;




    }

    else {

        resultado = numero1 + numero2;


    }

    document.write("La cuenta realizada dio como resultado el numero de " + resultado);

}

