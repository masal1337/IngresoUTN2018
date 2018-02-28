function Mostrar() {
  var numero;
  var cantDivisores = 0;
  var i;

  numero = parseInt(prompt("Ingrese numeros y encuentro los divisores"));

  for (i = 1; i <= numero; i++) {

    if (numero % i == 0) {

      cantDivisores++;
      console.log(i);

    }

  }

  console.log("La cantidad de numeros divisores es de " + cantDivisores);

}//FIN DE LA FUNCIÓN