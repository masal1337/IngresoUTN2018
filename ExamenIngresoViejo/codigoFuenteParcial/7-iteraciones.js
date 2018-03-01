//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var nota;
    var sexo;
    var acumNotas = 0;
    var promedio;
    var notaBaja;
    var varonesMas6 = 0;
    var flag = 0;
   
    
    
    for (var i = 1; i < 7; i++) {

        nota = parseInt(prompt("Ingrese la nota del alumno."));

        while (nota < 0 || nota > 10) {


            nota = parseInt(prompt("Error. La nota es mayor que 10 o menor que 0. Reingrese: "));

        }
        acumNotas +nota;

        sexo = prompt("Ingrese el sexo. ");
        sexo = sexo.toLowerCase();
        

        while (sexo != "m" && sexo != "f")


            sexo = prompt("Error. Reingrese. Ese sexo no existe");


    }
    if (sexo == "f") {
        sexo = "masculino";

    }
    else {

        sexo = "femenino";

    }

promedio = acumNotas / 6;

alert (promedio);


}


