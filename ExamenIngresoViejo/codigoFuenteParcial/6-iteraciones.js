//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {


    {

        var importe;
        var impMenor;
        var impMayor;
        var flag = 0;


        for (var i = 1; i <= 7; i++) {

            importe = parseFloat(prompt("Ingrese un importe mayor a 0"));

            while (importe <= 0) {

                importe = parseFloat(prompt("Error. Usted tiene que ingresar un numero mayor a 0"));

            }

            if (importe > impMayor || flag == 0) {

                impMayor = importe;


            }

            if (importe < impMenor || flag == 0) {

                impMenor = importe;
                flag = 1;

            }

        }

    }



    alert("Su importe mayor es de " + impMayor + " y su importe menor es de " + impMenor);




}

