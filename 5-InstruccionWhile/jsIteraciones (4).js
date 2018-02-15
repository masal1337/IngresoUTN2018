function Mostrar() {

    var numero = parseInt (prompt("ingrese un nùmero entre 0 y 10."));

    while (numero <= 0 || numero >= 9 || isNaN(numero)) {

        numero = parseint(prompt("Error. Reingrese un nùmero entre 0 y 10."));

    }

    alert("Su nùmero es " + numero);


}//FIN DE LA FUNCIÓN



