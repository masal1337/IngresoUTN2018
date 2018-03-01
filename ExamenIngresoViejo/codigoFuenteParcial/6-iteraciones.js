//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {   


{
   
    var importe = parseInt(prompt("Ingrese un importe mayor a 0"));
    var impMenor = 100;
    var impMayor = 0;
    var i = 1;
    var flag = 0;

  
  for (i ; 1 <= 7; i++)
  
  importe = parseFloat(prompt("Ingrese un importe mayor a 0"));

  while (importe <= 0) {

importe = parseFloat(prompt("Error. Usted tiene que ingresar un numero mayor a 0"));

        }

        if (importe > impMayor) {

            impMayor = importe;
            flag = 1;
impMayor = importe;
        }

        else if (importe < impMayor || flag == 0) {

            impMenor = importe;
            flag = 1;

        }

        

    }



alert("Su importe mayor es de " + impMayor + " y su importe menor es de " + impMenor);




}

