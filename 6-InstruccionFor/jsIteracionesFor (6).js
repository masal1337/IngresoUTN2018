function Mostrar() {
  var numero;
  var cantPares = 0;
  var i;

  numero = parseInt(prompt("Ingrese numeros y encuentro los pares"));

  for (i = 1; i <= numero; i++) {

    if (i % 2 == 0) {

      cantPares++;
      console.log(i);

    }

  }

  console.log("La cantidad de numeros encontrados es de " + cantPares);

}//FIN DE LA FUNCIÓN